import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, User, Coffee, Home, UtensilsCrossed, MapPin, Info, ShoppingBag } from 'lucide-react';
import logo from '../assets/White.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  // Navigation links configuration
  const navLinks = [
    { to: '#', label: 'Home', icon: Home },
    { to: '#', label: 'Menu', icon: UtensilsCrossed },
    { to: '#', label: 'Locations & Hours', icon: MapPin },
    { to: '#', label: 'About', icon: Info },
  ];

  return (
    <>
      {/* Premium Navbar Container - Fixed at top */}
      <header className="w-full fixed top-0 left-0 z-50 bg-linear-to-r from-[#2C1810] via-[#3E2723] to-[#2C1810] border-b border-[#C7A252]/30 shadow-2xl">
        {/* Animated gradient overlay for luxury feel */}
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0f0a]/40 to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
            
            {/* Logo Section - Luxury Brand */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-[#C7A252] to-[#E4C483] rounded-full blur-md opacity-0 group-hover:opacity-60 transition duration-500" />
                <div className="relative bg-linear-to-br from-[#C7A252] to-[#E4C483] rounded-full p-1.5 shadow-lg">
                  <Coffee className="w-6 h-6 md:w-7 md:h-7 text-[#2C1810] drop-shadow-sm" strokeWidth={1.8} />
                </div>
              </div>
              <div className="flex flex-col">
                <img src={logo} alt="logo" className="h-8 md:h-10 w-auto" />
              </div>
            </div>

            {/* Desktop Navigation - Premium Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative group px-4 lg:px-5 py-2 rounded-full text-[#D7CCC8] font-medium text-sm lg:text-base transition-all duration-300 hover:text-[#E4C483] ${
                      isActive ? 'text-[#E4C483] bg-[#C7A252]/10' : ''
                    }`
                  }
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <link.icon className="w-4 h-4 lg:w-4.5 lg:h-4.5 opacity-70 group-hover:opacity-100 transition" strokeWidth={1.7} />
                    <span>{link.label}</span>
                  </span>
                  {/* Active indicator bar */}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#C7A252] to-[#E4C483] transition-all duration-300 group-hover:w-8/12" />
                </NavLink>
              ))}
            </nav>

            {/* Right Section - Cart, Profile & Mobile Menu */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Cart Icon Button */}
              <NavLink
                to="#"
                className="relative group flex items-center justify-center p-2 rounded-full bg-linear-to-br from-[#C7A252]/20 to-[#E4C483]/10 border border-[#C7A252]/40 hover:border-[#E4C483]/70 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#C7A252] to-[#E4C483] opacity-0 group-hover:opacity-20 transition duration-300" />
                <ShoppingBag className="w-5 h-5 md:w-5.5 md:h-5.5 text-[#E4C483] group-hover:text-[#FFD700] transition" strokeWidth={1.8} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E4C483] rounded-full animate-pulse shadow-lg" />
              </NavLink>

              {/* Premium Profile Button */}
              <NavLink
                to="#"
                className="relative group flex items-center justify-center p-2 rounded-full bg-linear-to-br from-[#C7A252]/20 to-[#E4C483]/10 border border-[#C7A252]/40 hover:border-[#E4C483]/70 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#C7A252] to-[#E4C483] opacity-0 group-hover:opacity-20 transition duration-300" />
                <User className="w-5 h-5 md:w-5.5 md:h-5.5 text-[#E4C483] group-hover:text-[#FFD700] transition" strokeWidth={1.8} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E4C483] rounded-full animate-pulse shadow-lg" />
              </NavLink>

              {/* Mobile Menu Toggle Button - Luxury Design */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-[#C7A252]/20 to-[#E4C483]/10 border border-[#C7A252]/40 hover:border-[#E4C483]/70 transition-all duration-300 hover:scale-105 group"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-[#E4C483] group-hover:rotate-90 transition-transform duration-300" strokeWidth={1.8} />
                ) : (
                  <Menu className="w-5 h-5 text-[#E4C483] group-hover:rotate-180 transition-transform duration-300" strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Premium Glassmorphism Design */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out transform overflow-hidden ${
            isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="relative bg-linear-to-b from-[#3E2723]/95 via-[#2C1810]/98 to-[#1a0f0a]/95 backdrop-blur-xl border-t border-[#C7A252]/30 shadow-2xl">
            {/* Decorative top gradient line */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#C7A252] to-transparent" />
            
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? 'bg-linear-to-r from-[#C7A252]/20 to-[#E4C483]/10 text-[#E4C483] border-l-4 border-[#C7A252]'
                        : 'text-[#D7CCC8] hover:bg-[#C7A252]/10 hover:text-[#E4C483] hover:translate-x-2'
                    }`
                  }
                >
                  <link.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                    window.location.pathname === link.to ? 'text-[#E4C483]' : 'text-[#C7A252]'
                  }`} strokeWidth={1.7} />
                  <span className="font-medium text-base tracking-wide">{link.label}</span>
                  {window.location.pathname === link.to && (
                    <span className="ml-auto text-[#E4C483] text-sm opacity-70">→</span>
                  )}
                </NavLink>
              ))}

              {/* Decorative divider with coffee bean icon */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#C7A252]/20"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-transparent text-[#C7A252]/40 text-xs tracking-widest">✦ ✦ ✦</span>
                </div>
              </div>

              {/* Cart Section in Mobile Menu */}
              <NavLink
                to="/cart"
                onClick={closeMenu}
                className="flex items-center justify-between gap-4 px-4 py-3.5 rounded-xl bg-linear-to-r from-[#C7A252]/15 to-[#E4C483]/5 border border-[#C7A252]/30 hover:border-[#E4C483]/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-linear-to-br from-[#C7A252]/30 to-[#E4C483]/20">
                    <ShoppingBag className="w-5 h-5 text-[#E4C483]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[#E4C483] font-medium text-sm">My Cart</p>
                    <p className="text-[#D7CCC8]/60 text-xs">View your items</p>
                  </div>
                </div>
                <span className="text-[#E4C483] text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
              </NavLink>

              {/* Profile Section in Mobile Menu */}
              <NavLink
                to="/profile"
                onClick={closeMenu}
                className="flex items-center justify-between gap-4 px-4 py-3.5 rounded-xl bg-linear-to-r from-[#C7A252]/15 to-[#E4C483]/5 border border-[#C7A252]/30 hover:border-[#E4C483]/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-linear-to-br from-[#C7A252]/30 to-[#E4C483]/20">
                    <User className="w-5 h-5 text-[#E4C483]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[#E4C483] font-medium text-sm">My Account</p>
                    <p className="text-[#D7CCC8]/60 text-xs">Profile & Preferences</p>
                  </div>
                </div>
                <span className="text-[#E4C483] text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
              </NavLink>
            </div>
            
            {/* Bottom decorative pattern */}
            <div className="h-1 bg-linear-to-r from-transparent via-[#C7A252]/40 to-transparent" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;