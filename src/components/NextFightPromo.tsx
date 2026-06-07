import { useState } from 'react';
import { Calendar, MapPin, ShoppingCart, Info, Award, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { products } from '../data';
import poster1 from './IMG_5016.JPG';
import poster2 from './IMG_5017.JPG';

interface NextFightPromoProps {
  onAddToCart: (product: Product, size: string) => void;
  onProductClick: (product: Product) => void;
}

export function NextFightPromo({ onAddToCart, onProductClick }: NextFightPromoProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Find the new 6/21 custom T-shirt product from data
  const promoProduct = products.find(p => p.id === '15') || products[0];

  const handleAddToCart = () => {
    if (!selectedSize) return;
    onAddToCart(promoProduct, selectedSize);
    setSelectedSize(null);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      {/* Accent Header */}
      <div className="flex items-center gap-3 mb-8 border-b border-zinc-900 pb-4">
        <span className="w-2.5 h-6 bg-blue-600 inline-block rounded-sm animate-pulse"></span>
        <h2 className="font-display font-bold text-xl md:text-3xl uppercase tracking-wider text-white">
          Next Showdown &amp; Official Gear
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
        
        {/* Left Panel: Match/Fight Info Card */}
        <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between bg-gradient-to-br from-zinc-900 via-zinc-900 to-black/60 relative overflow-hidden">
          {/* Subtle bg glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 text-blue-400 border border-blue-900/40 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              <Award className="w-3.5 h-3.5" /> Next Match Announcement
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-white mb-2 leading-none">
              前薗 渓 <span className="text-blue-600">次戦決定</span>
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-medium mb-8 tracking-wider">
              DEEP WEST JAPAN BANTAM WEIGHT GP 2026トーナメント
            </p>

            {/* Match details table layout */}
            <div className="space-y-4 mb-5">
              <div className="flex items-start gap-4 p-3 bg-zinc-950/50 rounded-lg border border-zinc-900">
                <Calendar className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-zinc-400 text-xs uppercase font-mono tracking-wider">Date &amp; Time</h4>
                  <p className="text-white text-sm md:text-base font-bold">2026.06.21 <span className="text-blue-500 font-sans">[SUN]</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-zinc-950/50 rounded-lg border border-zinc-900">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-zinc-400 text-xs uppercase font-mono tracking-wider">Venue Location</h4>
                  <p className="text-white text-sm md:text-base font-bold">錦秀会 住吉区民センター大ホール（大阪）</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fight Posters Display (Replaced Countdown Timer) */}
          <div className="pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => setLightboxImage(poster1)}
                className="relative group rounded-lg overflow-hidden border border-zinc-800 cursor-pointer w-full"
              >
                <img 
                  src={poster1} 
                  alt="Fight Poster 1" 
                  className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-white/80" />
                </div>
              </div>
              <div 
                onClick={() => setLightboxImage(poster2)}
                className="hidden md:block relative group rounded-lg overflow-hidden border border-zinc-800 cursor-pointer"
              >
                <img 
                  src={poster2} 
                  alt="Fight Poster 2" 
                  className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Official Supporting Gear Showcase */}
        <div className="lg:col-span-7 p-6 md:p-10 border-t lg:border-t-0 lg:border-l border-zinc-800 flex flex-col md:flex-row gap-8 items-center">
          
          {/* T-Shirt Picture Frame */}
          <div className="w-full md:w-1/2 aspect-[4/5] bg-zinc-950/80 rounded-xl overflow-hidden border border-zinc-800 relative group shrink-0">
            <img 
              src={promoProduct.imageUrl} 
              alt={promoProduct.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />
            {promoProduct.imageUrls && promoProduct.imageUrls.length > 0 && (
              <button 
                onClick={() => onProductClick(promoProduct)}
                className="absolute bottom-3 right-[12px] bg-black/70 text-white/90 text-xs px-3 py-1.5 rounded hover:bg-white hover:text-black hover:border-white transition-all border border-zinc-700 flex items-center gap-1"
              >
                <Info className="w-3.5 h-3.5" /> 詳細写真を見る
              </button>
            )}
          </div>

          {/* Product Details & Ordering Widget */}
          <div className="w-full md:w-1/2 flex flex-col h-full justify-between">
            <div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest font-mono mb-2">
                Official Support Gear
              </div>
              <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2 leading-tight">
                {promoProduct.name}
              </h4>
              <div className="text-blue-500 font-display font-medium text-xl sm:text-2xl mb-4">
                ¥{promoProduct.price.toLocaleString()}
              </div>

              {/* Informative Blue Badge for ticket holders (Without TICKET BONUS label) */}
              <div className="bg-blue-950/45 border-2 border-blue-500 rounded-xl p-4 mb-6 relative overflow-hidden backdrop-blur-sm shadow-lg shadow-blue-900/30">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                <div className="flex items-start gap-2.5">
                  <div>
                    <p className="text-blue-400 text-xs sm:text-sm font-black leading-snug tracking-wide">
                      チケットご購入いただいた方には<span className="text-white text-[13px] sm:text-sm font-black mx-1 bg-blue-600/35 px-2 py-0.5 rounded border border-blue-405 shadow-md">3,000円</span>で販売させていただきます！
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 whitespace-pre-wrap">
                {promoProduct.description}
              </p>
            </div>

            {/* Sizes & Add to Cart Inline Selector */}
            <div className="border-t border-zinc-800 pt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-zinc-400 text-xs uppercase font-mono tracking-wider">Select Size</span>
              </div>
              
              <div className="flex gap-2 mb-6">
                {promoProduct.sizes.map(size => {
                  const isSoldOut = promoProduct.soldOutSizes?.includes(size);
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      disabled={isSoldOut}
                      onClick={() => !isSoldOut && setSelectedSize(isSelected ? null : size)}
                      className={`w-10 h-10 border font-bold text-xs sm:text-sm transition-all rounded-md ${
                        isSoldOut
                          ? 'bg-zinc-950 text-zinc-700 border-zinc-900 cursor-not-allowed line-through'
                          : isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25'
                            : 'bg-zinc-800 text-white border-zinc-700 hover:border-zinc-500'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>

              <button
                disabled={!selectedSize}
                onClick={handleAddToCart}
                className={`w-full py-3 px-4 rounded-lg font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 select-none ${
                  selectedSize
                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/30 cursor-pointer'
                    : 'bg-zinc-800 text-zinc-500 border border-zinc-700 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                {selectedSize ? `Add Size ${selectedSize} to Cart` : 'Select size above'}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Lightbox Modal for Fight Poster */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-full border border-zinc-800 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-full max-h-[90vh]"
            >
              <img 
                src={lightboxImage} 
                alt="Enlarged Fight Poster" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-zinc-800"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
