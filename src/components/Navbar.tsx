import { ShoppingBag } from 'lucide-react';
import teamZonoLogo from './TEAMZONO.PNG';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

export function Navbar({ cartItemCount, onOpenCart }: NavbarProps) {
  return (
    <nav className="relative z-50 bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-0 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center w-[30vw] md:w-[25vw] max-w-[240px]">
          <img src={teamZonoLogo} alt="TEAM ZONO" className="w-full h-auto object-contain object-left scale-90 origin-left" />
        </div>
        
        <button 
          onClick={onOpenCart}
          className="relative p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          <ShoppingBag className="w-6 h-6" />
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 w-5 h-5 bg-blue-600 text-white text-xs font-bold flex items-center justify-center rounded-full transform translate-x-1/4 -translate-y-1/4">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
