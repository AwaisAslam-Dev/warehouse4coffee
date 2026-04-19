import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Coffee, Coffee as Tea, Sunrise, UtensilsCrossed, ArrowRight } from 'lucide-react';
import menu1 from '../assets/menuItem1.jfif';
import menu2 from '../assets/menuItem2.jfif';
import menu3 from '../assets/menuItem3jfif.jfif';
import menu4 from '../assets/menuItem14.jfif';

const ExploreMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);

  const menuCategories = [
    {
      id: 1,
      title: "Coffee",
      icon: Coffee,
      image: menu1,
      bgColor: "from-amber-900/20 to-amber-700/10"
    },
    {
      id: 2,
      title: "Tea & Other Beverages",
      icon: Tea,
      image: menu4,
      bgColor: "from-emerald-900/20 to-teal-700/10"
    },
    {
      id: 3,
      title: "Breakfast & Baked Goods",
      icon: Sunrise,
      image: menu2,
      bgColor: "from-orange-900/20 to-yellow-700/10"
    },
    {
      id: 4,
      title: "Lunch",
      icon: UtensilsCrossed,
      image: menu3,
      bgColor: "from-red-900/20 to-rose-700/10"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe CTA
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    // Set section as visible for card animations
    if (sectionRef.current) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            sectionObserver.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      sectionObserver.observe(sectionRef.current);
      return () => sectionObserver.disconnect();
    }

    return () => observer.disconnect();
  }, []);

  // Handle order button click
  const handleOrderNow = useCallback(() => {
    const orderSection = document.getElementById('order-section');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback to menu section
      const menuSection = document.getElementById('menu-section');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  // Handle view full menu click
  const handleViewFullMenu = useCallback(() => {
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="explore-menu"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-linear-to-br from-[#FFF8F0] via-[#FDF5E6] to-[#F5E6D3]"
    >
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#C7A252]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D4A574]/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#E8C99B]/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5E3C' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className="text-center mb-12 md:mb-16 lg:mb-20 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#C7A252]/30 shadow-sm mb-4">
            <Coffee className="w-4 h-4 text-[#8B5E3C]" />
            <span className="text-[#6B4226] text-xs font-semibold tracking-wider">OUR MENU</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C1810] mb-4">
            Explore Our <span className="bg-linear-to-r from-[#8B5E3C] via-[#C7A252] to-[#8B5E3C] bg-clip-text text-transparent">Signature Collection</span>
          </h2>
          
          <p className="text-[#5C3D2E] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Discover our carefully curated menu featuring the finest ingredients, 
            expert preparation, and unforgettable flavors.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {menuCategories.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-700 ease-out hover:z-10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glassmorphic Card */}
              <div className="relative h-full bg-white/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-white/40 cursor-pointer group">
                
                {/* Card Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Image Container */}
                <div className={`relative h-48 sm:h-52 md:h-56 overflow-hidden bg-linear-to-br ${category.bgColor}`}>
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 md:p-6 text-center">
                  {/* Icon and Title */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 rounded-xl bg-linear-to-br from-[#8B5E3C]/10 to-[#C7A252]/10 border border-[#C7A252]/20 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B5E3C]" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C1810] group-hover:text-[#8B5E3C] transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Order Button */}
                  <button 
                    onClick={handleOrderNow}
                    className="group/btn w-full mt-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-linear-to-r from-[#8B5E3C] to-[#C7A252] rounded-full font-semibold text-white text-xs sm:text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#C7A252]/0 via-[#C7A252]/5 to-[#C7A252]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          ref={ctaRef}
          className="text-center mt-12 md:mt-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <button 
            onClick={handleViewFullMenu}
            className="group px-6 sm:px-8 py-2.5 sm:py-3 bg-linear-to-r from-[#8B5E3C] to-[#C7A252] rounded-full font-semibold text-white text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #F5E6D3;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #C7A252;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #8B5E3C;
        }
        
        /* Performance optimizations */
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default ExploreMenu;