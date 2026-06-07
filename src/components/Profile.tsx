import { Instagram } from 'lucide-react';
import zono6 from './zono6.JPG';

export function Profile() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl">
            <img 
              src={zono6}
              alt="Kei Maezono"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-2 text-zinc-100">
            Kei Maezono
          </h2>
          <h3 className="text-xl text-zinc-400 mb-6 font-medium">Professional MMA Fighter / Bantamweight</h3>
          
          <p className="text-zinc-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            DEEP、ONE Championship、WKG(中国)など国内外の舞台で戦う総合格闘家。
            パーソナルトレーナーとしても活動中。
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="https://www.instagram.com/mma_zono/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
