import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import zonoVideo from './zonomov.mp4';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      
      const playVideo = () => {
        if (video.paused) {
          video.play().catch(() => {
            // Silent catch to handle browser autopatient blocks
          });
        }
      };

      playVideo();

      // Ensure looping works securely across older devices and Safari
      const handleEnded = () => {
        video.currentTime = 0;
        playVideo();
      };
      video.addEventListener('ended', handleEnded);

      // Trigger video play on first user interaction if blocked by browser autoplay policy
      const handleInteraction = () => {
        playVideo();
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
      };

      document.addEventListener('click', handleInteraction);
      document.addEventListener('touchstart', handleInteraction);
      document.addEventListener('scroll', handleInteraction);

      // Resume playback when tab gains visibility (e.g. user returns to the app)
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          playVideo();
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        video.removeEventListener('ended', handleEnded);
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);

  const scrollToShop = () => {
    document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[80vh] min-h-[600px] bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video 
          ref={videoRef}
          src={zonoVideo}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-6 leading-tight">
          KEI MAEZONO <br/> <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Clothing collection</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-medium">
          Support his story. And let's dream together.
        </p>
        
        <button 
          onClick={scrollToShop}
          className="bg-white text-black px-8 py-4 uppercase font-display font-bold text-sm tracking-wider hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          Shop Collection
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
