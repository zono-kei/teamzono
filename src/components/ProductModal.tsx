import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setSelectedSize(null);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, product]);

  if (!product) return null;

  const images = [product.imageUrl, ...(product.imageUrls || [])];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl h-[90vh] md:h-[80vh] max-h-[800px] bg-zinc-950 z-[70] rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-zinc-800"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-[80] w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Gallery */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-zinc-900 group">
              {images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 z-10 hidden md:flex"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 z-10 hidden md:flex"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center p-4">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={images[currentImageIndex]}
                    alt={`${product.name} - image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>
              </div>

              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4 md:w-6' : 'bg-white/40 hover:bg-white/60'}`}
                    />
                  ))}
                </div>
              )}
              {/* Mobile swipe hints or simple arrows since hover isn't great */}
              {images.length > 1 && (
                <div className="absolute inset-y-0 w-full flex justify-between px-2 items-center md:hidden pointer-events-none">
                  <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center pointer-events-auto">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center pointer-events-auto">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col h-1/2 md:h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800">
              <div className="mb-2">
                <span className="text-zinc-500 text-sm font-medium tracking-wider uppercase">{product.series}</span>
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-white uppercase tracking-tight">{product.name}</h2>
              <div className="text-xl md:text-2xl font-medium text-white mb-6 border-b border-zinc-800 pb-6 shrink-0">
                ¥{product.price.toLocaleString()}
              </div>
              
              <div className="mb-6">
                <h3 className="text-white font-medium mb-3 uppercase tracking-wide text-sm flex items-center">Description</h3>
                <p className="text-zinc-400 leading-relaxed whitespace-pre-wrap text-sm md:text-base">{product.description}</p>
              </div>

              <div className="mt-auto pt-6 border-t border-zinc-900">
                {product.isSoldOut ? (
                  <div className="bg-zinc-900 border border-zinc-800 text-zinc-500 font-bold text-center py-4 rounded-lg uppercase tracking-widest shrink-0">
                    Sold Out
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white font-medium uppercase tracking-wide text-sm">Select Size</span>
                        {selectedSize && <span className="text-zinc-400 text-sm font-bold">{selectedSize}</span>}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map(size => {
                          const isSizeSoldOut = product.soldOutSizes?.includes(size);
                          return (
                            <button
                              key={size}
                              disabled={isSizeSoldOut}
                              onClick={() => !isSizeSoldOut && setSelectedSize(size)}
                              className={`w-12 h-12 md:w-14 md:h-14 font-bold text-sm border transition-all shrink-0 ${
                                isSizeSoldOut
                                  ? 'bg-zinc-900 text-zinc-600 border-zinc-800 cursor-not-allowed line-through'
                                  : selectedSize === size
                                    ? 'bg-white text-black border-white'
                                    : 'bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700'
                              }`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    
                    <button
                      onClick={handleAddToCart}
                      disabled={!selectedSize}
                      className={`w-full py-4 rounded-lg font-display font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shrink-0 ${
                        !selectedSize 
                          ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                          : 'bg-white text-black hover:bg-zinc-200'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {selectedSize ? 'Add to Cart' : 'Select a Size'}
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
