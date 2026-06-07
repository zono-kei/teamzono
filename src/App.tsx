import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NextFightPromo } from './components/NextFightPromo';
import { Profile } from './components/Profile';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { products } from './data';
import { Product, CartItem } from './types';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import teamZonoLogo from './components/TEAMZONO.PNG';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product: Product, size: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id && item.selectedSize === size);
      if (existingItem) {
        return prev.map(item => 
          item === existingItem 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedSize: size }];
    });
    showToast(`Added ${product.name} (${size}) to cart`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, size: string, newQuantity: number) => {
    if (newQuantity < 1) {
      handleRemoveItem(productId, size);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        (item.product.id === productId && item.selectedSize === size)
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.selectedSize === size)));
  };

  const handleCheckout = () => {
    alert("Checkout functionality would be implemented here! This is a demo store.");
    setCartItems([]);
    setIsCartOpen(false);
    showToast("Order placed successfully! (Demo)");
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar cartItemCount={cartItemCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        
        <NextFightPromo 
          onAddToCart={handleAddToCart}
          onProductClick={handleProductClick}
        />
        
        <Profile />
        
        <section id="shop-section" className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-4 text-white">
              Latest Drops
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed whitespace-pre-wrap font-sans px-4">
              このサイトは残っているサイズと在庫を表示しているだけになりますので{"\n"}
              参照してご購入希望の方はお手数ですがインスタグラムのDMにてご連絡ください。
            </p>
          </div>
          
          <div className="flex flex-col gap-20">
            {(['TEAM ZONO', 'GOAT apparel', 'notorious qupid'] as const).map((seriesName) => {
              const seriesProducts = products.filter(p => p.series === seriesName);
              if (seriesProducts.length === 0) return null;
              
              return (
                <div key={seriesName}>
                  <div className="mb-8">
                    <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight border-b-2 border-zinc-900 pb-4 text-white">
                      {seriesName}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
                    {seriesProducts.map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        onAddToCart={handleAddToCart} 
                        onClick={() => handleProductClick(product)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <footer className="bg-zinc-950 text-white py-12 text-center border-t border-zinc-900">
        {/* TEAM ZONO Brand Image Asset */}
        <div className="max-w-[200px] mx-auto mb-6 opacity-75 hover:opacity-100 transition-opacity duration-300">
          <img src={teamZonoLogo} alt="TEAM ZONO" className="w-full h-auto object-contain mx-auto" />
        </div>

        {/* Polished, premium copy replacing the simple slogan */}
        <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed font-sans px-4 mb-2">
          日々のハードなトレーニング、そしてそれぞれの人生という舞台で闘い続けるすべての人へ。{"\n"}
          闘志とクオリティを。
        </p>
        <p className="text-zinc-500 text-xs mt-4">
          &copy; {new Date().getFullYear()} TEAM ZONO × Fight & Fit Apparel. All rights reserved.
        </p>
        <p className="text-zinc-600 text-[10px] tracking-widest uppercase mt-1 font-mono">Designed for the Grind & Crafted with Honor</p>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-6 left-1/2 z-50 bg-zinc-900 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-zinc-800"
          >
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="font-medium text-sm">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
