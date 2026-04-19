import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, ChevronRight, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#FFF8F0] via-[#FDF5E6] to-[#F5E6D3]">
      
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5E3C' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Animated Ambient Glow Orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-80 h-80 bg-[#C7A252]/10 rounded-full blur-3xl"
        animate={pulseAnimation}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-72 h-72 bg-[#D4A574]/8 rounded-full blur-3xl"
        animate={pulseAnimation}
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#E8C99B]/5 rounded-full blur-3xl"
        animate={pulseAnimation}
        transition={{ delay: 0.5 }}
      />

      {/* Floating Coffee Beans Decoration */}
      <motion.div
        className="absolute top-32 right-20 opacity-20 hidden lg:block"
        animate={floatingAnimation}
        transition={{ delay: 0.5 }}
      >
        <Coffee className="w-8 h-8 text-[#8B5E3C]" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 opacity-20 hidden lg:block"
        animate={floatingAnimation}
        transition={{ delay: 1 }}
      >
        <Sparkles className="w-6 h-6 text-[#C7A252]" />
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content with Framer Motion */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Premium Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#C7A252]/30 shadow-sm w-fit group cursor-pointer hover:scale-105 transition-transform duration-300">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Coffee className="w-4 h-4 text-[#8B5E3C]" />
              </motion.div>
              <span className="text-[#6B4226] text-xs font-semibold tracking-wider">PREMIUM COFFEE HOUSE</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15]">
                <span className="text-[#2C1810]">Wake Up to</span>
                <br />
                <span className="bg-linear-to-r from-[#8B5E3C] via-[#C7A252] to-[#8B5E3C] bg-clip-text text-transparent">
                  Perfect Brew
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-[#5C3D2E] text-base md:text-lg max-w-lg leading-relaxed">
              Single-origin beans, masterfully roasted. Each cup crafted with precision and passion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-7 py-3 bg-linear-to-r from-[#8B5E3C] to-[#C7A252] rounded-full font-semibold text-white text-base overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Order Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-[#C7A252] to-[#8B5E3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 94, 60, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 bg-transparent border-2 border-[#8B5E3C] rounded-full font-semibold text-[#8B5E3C] text-base flex items-center justify-center gap-2 group"
              >
                <span>Explore Menu</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2.5 }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators with Animation */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-6 pt-4"
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-[#C7A252] fill-current" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-[#5C3D2E] text-sm">2,500+ reviews</span>
              </motion.div>
              <div className="w-px h-4 bg-[#C7A252]/30" />
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
              >
                <span className="text-[#8B5E3C] font-bold text-base">50k+</span>
                <span className="text-[#5C3D2E] text-xs">served monthly</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Coffee Image */}
          <motion.div 
            className="relative flex justify-center items-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative group w-full max-w-md mx-auto lg:max-w-full">
              {/* Animated glow effect */}
              <motion.div 
                className="absolute -inset-4 bg-linear-to-r from-[#C7A252]/15 to-[#D4A574]/15 rounded-3xl blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Coffee PNG Image */}
              <motion.div 
                className="relative"
                animate={floatingAnimation}
              >
                <img 
                  src="https://www.pngmart.com/files/21/Coffee-PNG-Clipart.png"
                  alt="Premium Fresh Coffee Cup"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.15))' }}
                />
                
                {/* Steam Animation Overlay */}
                <motion.div 
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
                  animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex gap-2">
                    <div className="w-1 h-8 bg-[#C7A252]/30 rounded-full" />
                    <div className="w-1 h-10 bg-[#C7A252]/25 rounded-full" />
                    <div className="w-1 h-6 bg-[#C7A252]/35 rounded-full" />
                    <div className="w-1 h-8 bg-[#C7A252]/20 rounded-full" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Badge - Fresh Roast */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-[#C7A252]/40"
                initial={{ opacity: 0, x: -30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#C7A252]/15 rounded-full p-1.5">
                    <Coffee className="w-4 h-4 text-[#8B5E3C]" />
                  </div>
                  <div>
                    <p className="text-[#2C1810] font-semibold text-xs">Fresh Roast</p>
                    <p className="text-[#5C3D2E]/70 text-[10px]">Daily 6 AM</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Specialty */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-[#C7A252]/40"
                initial={{ opacity: 0, x: 30, y: -30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <p className="text-[#8B5E3C] font-bold text-base">100%</p>
                  <p className="text-[#5C3D2E]/70 text-[10px]">Arabica</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Bottom Gradient Line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#C7A252] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
};

export default Hero;