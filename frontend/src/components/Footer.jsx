import React from 'react';
import { Coffee, MapPin, Phone, Mail, Clock, Heart, ArrowUp } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-br from-[#2C1810] via-[#3E2723] to-[#2C1810] text-white overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#C7A252]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E4C483]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-[#8B5E3C]/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C7A252' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        {/* Main Footer Content - 3 columns instead of 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1 - Brand & About */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="bg-linear-to-br from-[#C7A252] to-[#E4C483] rounded-full p-2 shadow-lg">
                <Coffee className="w-6 h-6 text-[#2C1810]" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Bean & Brew
                </h3>
                <p className="text-[#D7CCC8] text-xs">Artisan Coffee House</p>
              </div>
            </div>
            
            <p className="text-[#D7CCC8] text-xs sm:text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
              Crafting exceptional coffee experiences since 2015. 
              Premium single-origin beans, masterfully roasted and brewed to perfection.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3 pt-2 justify-center sm:justify-start">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#C7A252] transition-all duration-300 hover:scale-110 group">
                <FaFacebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#C7A252] transition-all duration-300 hover:scale-110 group">
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#C7A252] transition-all duration-300 hover:scale-110 group">
                <FaTwitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#C7A252] transition-all duration-300 hover:scale-110 group">
                <FaYoutube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-serif text-xl font-semibold text-white relative inline-block mx-auto sm:mx-0">
              Quick Links
              <span className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 h-0.5 bg-[#C7A252] rounded-full"></span>
            </h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'Locations & Hours', 'About Us', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#D7CCC8] text-xs sm:text-sm hover:text-[#E4C483] transition-colors duration-300 flex items-center gap-2 group justify-center sm:justify-start">
                    <span className="w-1 h-1 bg-[#C7A252] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-serif text-xl font-semibold text-white relative inline-block mx-auto sm:mx-0">
              Contact Us
              <span className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 h-0.5 bg-[#C7A252] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group justify-center sm:justify-start">
                <MapPin className="w-5 h-5 text-[#C7A252] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[#D7CCC8] text-xs sm:text-sm">335 South Dixie Dr., Vandalia, OH 45377</span>
              </li>
              <li className="flex items-center gap-3 group justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-[#C7A252] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:9373876640" className="text-[#D7CCC8] text-xs sm:text-sm hover:text-[#E4C483] transition-colors duration-300">
                  937.387.6640
                </a>
              </li>
              <li className="flex items-center gap-3 group justify-center sm:justify-start">
                <Mail className="w-5 h-5 text-[#C7A252] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:info@beanandbrew.com" className="text-[#D7CCC8] text-xs sm:text-sm hover:text-[#E4C483] transition-colors duration-300 break-all">
                  info@beanandbrew.com
                </a>
              </li>
              <li className="flex items-center gap-3 group justify-center sm:justify-start">
                <Clock className="w-5 h-5 text-[#C7A252] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-[#D7CCC8] text-xs sm:text-sm">
                  <div>Mon-Fri: 6 AM - 6 PM</div>
                  <div>Sat-Sun: 8 AM - 6 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8 md:my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            {/* <div className="bg-linear-to-r from-[#2C1810] via-[#3E2723] to-[#2C1810] px-4">
              <Coffee className="w-5 h-5 text-[#C7A252]" />
            </div> */}
          </div>
        </div>

        {/* Bottom Bar - Copyright & Reference */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[#D7CCC8]/70 text-xs sm:text-sm">
            © {currentYear} Bean & Brew Coffee House. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-[#D7CCC8]/70 text-xs sm:text-sm">
            <span>Designed & Developed with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by</span>
            <a 
              href="https://awaisaslam-dev.vercel.app/" 
              className="text-[#E4C483] hover:text-[#C7A252] transition-colors duration-300 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Awais
            </a>
          </div>

          {/* Back to Top Button - Icon only */}
          <button
            onClick={scrollToTop}
            className="p-2 bg-white/10 hover:bg-[#C7A252] rounded-full transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-linear-to-r from-transparent via-[#C7A252] to-transparent" />
    </footer>
  );
};

export default Footer;