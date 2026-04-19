import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Coffee, ChevronRight, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Add smooth scroll behavior to the document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // Handle CTA button clicks with smooth scroll
  const handleOrderNow = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-linear-to-br from-[#FFF8F0] via-[#FDF5E6] to-[#F5E6D3] min-h-[90vh] flex items-center"
    >
      {/* Static Background Pattern - No animation for performance */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5E3C' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Static Ambient Glow Orbs - CSS animation for better performance */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#C7A252]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#D4A574]/8 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#E8C99B]/5 rounded-full blur-3xl animate-pulse animation-delay-500" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content with CSS animations */}
          <div className={`space-y-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#C7A252]/30 shadow-sm w-fit group hover:scale-105 transition-transform duration-300">
              <Coffee className="w-4 h-4 text-[#8B5E3C]" />
              <span className="text-[#6B4226] text-xs font-semibold tracking-wider">PREMIUM COFFEE HOUSE</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15]">
                <span className="text-[#2C1810]">Wake Up to</span>
                <br />
                <span className="bg-linear-to-r from-[#8B5E3C] via-[#C7A252] to-[#8B5E3C] bg-clip-text text-transparent">
                  Perfect Brew
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#5C3D2E] text-base md:text-lg max-w-lg leading-relaxed">
              Single-origin beans, masterfully roasted. Each cup crafted with precision and passion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={handleOrderNow}
                className="group relative px-7 py-3 bg-linear-to-r from-[#8B5E3C] to-[#C7A252] rounded-full font-semibold text-white text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Order Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-[#C7A252] to-[#8B5E3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button 
                onClick={handleExploreMenu}
                className="px-7 py-3 bg-transparent border-2 border-[#8B5E3C] rounded-full font-semibold text-[#8B5E3C] text-base flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-[#8B5E3C]/10 active:scale-95 group"
              >
                <span>Explore Menu</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C7A252] fill-current" />
                  ))}
                </div>
                <span className="text-[#5C3D2E] text-sm">2,500+ reviews</span>
              </div>
              <div className="w-px h-4 bg-[#C7A252]/30" />
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <span className="text-[#8B5E3C] font-bold text-base">50k+</span>
                <span className="text-[#5C3D2E] text-xs">served monthly</span>
              </div>
            </div>
          </div>

          {/* Right Column - Coffee Image with CSS animations */}
          <div className={`relative flex justify-center items-center transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative group w-full max-w-md mx-auto lg:max-w-full">
              {/* Static glow effect - CSS animation for performance */}
              <div className="absolute -inset-4 bg-linear-to-r from-[#C7A252]/15 to-[#D4A574]/15 rounded-3xl blur-2xl animate-pulse-slow" />
              
              {/* Main Coffee PNG Image */}
              <div className="relative animate-float">
                <img 
                  src="https://www.pngmart.com/files/21/Coffee-PNG-Clipart.png"
                  alt="Premium Fresh Coffee Cup"
                  className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  width="600"
                  height="600"
                />
                
                {/* Steam Animation - CSS only */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 pointer-events-none">
                  <div className="flex gap-2">
                    <div className="w-1 h-8 bg-[#C7A252]/30 rounded-full animate-steam-1" />
                    <div className="w-1 h-10 bg-[#C7A252]/25 rounded-full animate-steam-2" />
                    <div className="w-1 h-6 bg-[#C7A252]/35 rounded-full animate-steam-3" />
                    <div className="w-1 h-8 bg-[#C7A252]/20 rounded-full animate-steam-4" />
                  </div>
                </div>
              </div>

              {/* Floating Badge - Fresh Roast */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-[#C7A252]/40 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <div className="bg-[#C7A252]/15 rounded-full p-1.5">
                    <Coffee className="w-4 h-4 text-[#8B5E3C]" />
                  </div>
                  <div>
                    <p className="text-[#2C1810] font-semibold text-xs">Fresh Roast</p>
                    <p className="text-[#5C3D2E]/70 text-[10px]">Daily 6 AM</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Specialty */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-[#C7A252]/40 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <p className="text-[#8B5E3C] font-bold text-base">100%</p>
                  <p className="text-[#5C3D2E]/70 text-[10px]">Arabica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line - CSS only */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#C7A252] to-transparent" />

      {/* CSS Animations - Optimized for performance */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes steam-1 {
          0%, 100% {
            transform: translateY(0) scaleY(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scaleY(1.5);
            opacity: 0.7;
          }
        }
        
        @keyframes steam-2 {
          0%, 100% {
            transform: translateY(0) scaleY(1);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-25px) scaleY(1.4);
            opacity: 0.6;
          }
        }
        
        @keyframes steam-3 {
          0%, 100% {
            transform: translateY(0) scaleY(1);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-18px) scaleY(1.3);
            opacity: 0.75;
          }
        }
        
        @keyframes steam-4 {
          0%, 100% {
            transform: translateY(0) scaleY(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-22px) scaleY(1.6);
            opacity: 0.65;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-steam-1 {
          animation: steam-1 3s ease-in-out infinite;
        }
        
        .animate-steam-2 {
          animation: steam-2 3.5s ease-in-out infinite 0.5s;
        }
        
        .animate-steam-3 {
          animation: steam-3 2.8s ease-in-out infinite 1s;
        }
        
        .animate-steam-4 {
          animation: steam-4 3.2s ease-in-out infinite 1.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;