import { useState } from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
  onClick?: () => void;
}

export function ProductCard({ product, onAddToCart, onClick }: ProductCardProps) {
  const [isSelectingSize, setIsSelectingSize] = useState(false);

  const handleSizeSelect = (size: string) => {
    onAddToCart(product, size);
    setIsSelectingSize(false);
  };

  return (
    <div className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-700 transition-all duration-300">
      <div 
        className="relative aspect-[4/5] bg-zinc-950 overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.imageUrls && product.imageUrls.length > 0 && (
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-sm backdrop-blur-sm border border-zinc-700">
            +{product.imageUrls.length} Images
          </div>
        )}
      </div>
      
      <div className="p-3 sm:p-5 flex flex-col flex-grow">
        <h3 
          className="font-display font-bold text-sm sm:text-lg mb-1 leading-tight text-zinc-100 cursor-pointer hover:text-white transition-colors"
          onClick={onClick}
        >
          {product.name}
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mt-auto">
          <span className="font-medium text-sm sm:text-lg text-white">¥{product.price.toLocaleString()}</span>
          
          <div className="relative w-full sm:w-auto flex justify-end">
            {product.isSoldOut ? (
              <span className="text-zinc-500 font-bold text-xs sm:text-sm border border-zinc-700 px-3 py-1.5 rounded-full flex items-center">SOLD OUT</span>
            ) : (
              <AnimatePresence mode="wait">
                {!isSelectingSize ? (
                  <motion.button
                    key="add"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsSelectingSize(true)}
                    className="bg-zinc-800 text-white border border-zinc-700 p-2 sm:p-3 rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                ) : (
                  <motion.div
                    key="sizes"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-wrap justify-end gap-1"
                  >
                    {product.sizes.map(size => {
                      const isSizeSoldOut = product.soldOutSizes?.includes(size);
                      return (
                        <button
                          key={size}
                          disabled={isSizeSoldOut}
                          onClick={() => !isSizeSoldOut && handleSizeSelect(size)}
                          className={`w-8 h-8 sm:w-10 sm:h-10 font-bold text-xs sm:text-sm border transition-colors ${
                            isSizeSoldOut
                              ? 'bg-zinc-900 text-zinc-600 border-zinc-800 cursor-not-allowed line-through'
                              : 'bg-zinc-800 text-white border-zinc-700 hover:bg-white hover:text-black hover:border-white'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                    <button 
                      onClick={() => setIsSelectingSize(false)}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-zinc-950 text-zinc-400 font-bold text-xs sm:text-sm hover:text-white border border-transparent"
                    >
                      ×
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
