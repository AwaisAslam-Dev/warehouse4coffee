import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Pause, Image as ImageIcon, Coffee } from 'lucide-react';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const sliderImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=700&fit=crop",
      title: "Cozy Interior",
      description: "Warm and inviting atmosphere with comfortable seating"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&h=700&fit=crop",
      title: "Artisan Coffee",
      description: "Expertly crafted beverages from premium beans"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=700&fit=crop",
      title: "Modern Seating",
      description: "Contemporary design meets comfort"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1200&h=700&fit=crop",
      title: "Latte Art",
      description: "Beautifully presented coffee creations"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=700&fit=crop",
      title: "Delicious Pastries",
      description: "Fresh baked goods made daily"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=700&fit=crop",
      title: "Espresso Bar",
      description: "Premium coffee selection and brewing methods"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=700&fit=crop",
      title: "Gourmet Meals",
      description: "Seasonal ingredients and chef-inspired dishes"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&h=700&fit=crop",
      title: "Outdoor Patio",
      description: "Al fresco dining in beautiful weather"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, sliderImages.length]);

  // Reset auto-play when manually changing slides
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    document.body.style.overflow = 'auto';
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showLightbox) {
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'Escape') closeLightbox();
      } else {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showLightbox, currentIndex]);

  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-linear-to-b from-[#FFF8F0] via-[#FDF5E6] to-[#F5E6D3]">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#C7A252]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#D4A574]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#E8C99B]/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5E3C' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#C7A252]/30 shadow-sm mb-4">
            <ImageIcon className="w-4 h-4 text-[#8B5E3C]" />
            <span className="text-[#6B4226] text-xs font-semibold tracking-wider">OUR GALLERY</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] mb-4">
            A Visual Journey Through{' '}
            <span className="bg-linear-to-r from-[#8B5E3C] via-[#C7A252] to-[#8B5E3C] bg-clip-text text-transparent">
              Our Coffee House
            </span>
          </h2>
          
          <p className="text-[#5C3D2E] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Step into our world of exceptional coffee, delicious food, and inviting spaces
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="relative h-100 sm:h-125 md:h-150 transition-transform duration-500 ease-out"
            >
              {sliderImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentIndex 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Slide Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                    <h3 className="font-serif text-2xl md:text-4xl font-bold mb-2 animate-slideUp">
                      {image.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 max-w-2xl animate-slideUp delay-100">
                      {image.description}
                    </p>
                    <button 
                      onClick={() => openLightbox(index)}
                      className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold hover:bg-white/30 transition-all duration-300 animate-slideUp delay-200"
                    >
                      View Fullscreen
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-4 px-4">
            {sliderImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative shrink-0 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-[#C7A252] scale-105' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-[#C7A252]/20 rounded-lg" />
                )}
              </button>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-[#C7A252]' 
                    : 'w-2 h-2 bg-[#C7A252]/40 hover:bg-[#C7A252]/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {showLightbox && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg animate-fadeIn" onClick={closeLightbox}>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="relative max-w-6xl w-full animate-scaleIn" onClick={(e) => e.stopPropagation()}>
                <img 
                  src={sliderImages[lightboxIndex].url}
                  alt={sliderImages[lightboxIndex].title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                  <h3 className="text-white font-serif text-2xl font-bold mb-1">
                    {sliderImages[lightboxIndex].title}
                  </h3>
                  <p className="text-white/80">
                    {sliderImages[lightboxIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
              {lightboxIndex + 1} / {sliderImages.length}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ImageGallery;