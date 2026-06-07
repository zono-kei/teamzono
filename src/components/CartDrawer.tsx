import { CartItem } from '../types';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, newQuantity: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onCheckout: () => void;
}

export function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout }: CartDrawerProps) {
  const totalAmount = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 z-50 flex flex-col shadow-2xl border-l border-zinc-900 text-zinc-100"
          >
            <div className="flex items-center justify-between p-6 border-b border-zinc-900">
              <h2 className="font-display font-bold text-2xl uppercase tracking-tight flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" /> Your Gear
              </h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white"
                aria-label="Close cart"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-zinc-800">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-500 gap-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p className="text-lg font-medium">Your cart is empty.</p>
                  <button 
                    onClick={onClose}
                    className="text-zinc-300 underline underline-offset-4 hover:text-white transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-4">
                      <div className="w-24 h-24 bg-zinc-900 rounded-md overflow-hidden flex-shrink-0 border border-zinc-800">
                        <img 
                          src={item.product.imageUrl} 
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-bold text-sm leading-tight pr-2">{item.product.name}</h3>
                            <button 
                              onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                              className="text-zinc-500 hover:text-blue-500 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-sm text-zinc-400 mb-2">Size: {item.selectedSize}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-zinc-800 rounded-sm bg-zinc-900">
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                              className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                              className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <span className="font-bold text-sm">¥{(item.product.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-zinc-900 p-6 bg-zinc-950">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-zinc-400 font-medium">Subtotal</span>
                  <span className="font-display font-bold text-2xl text-white">¥{totalAmount.toLocaleString()}</span>
                </div>
                <button 
                  onClick={onCheckout}
                  className="w-full bg-white text-zinc-950 font-display font-bold uppercase tracking-widest py-4 hover:bg-zinc-200 transition-colors duration-300"
                >
                  Checkout
                </button>
                <p className="text-center text-xs text-zinc-500 mt-4">
                  Shipping and taxes calculated at checkout.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
