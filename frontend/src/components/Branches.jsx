import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Coffee } from 'lucide-react';
import branch1 from '../assets/branchOne.avif'
import branch2 from '../assets/branchtwo.avif'
import branch3 from '../assets/branchthree.avif'
const Branches = () => {
  const branches = [
    {
      id: 1,
      name: "Vandalia",
      address: "335 South Dixie Dr.\nVandalia, OH 45377",
      phone: "937.387.6640",
      email: "vandalia@warehouse4coffee.com",
      hours: {
        weekdays: "6 AM - 6 PM",
        weekends: "8 AM - 6 PM"
      },
      image: branch1,
      mapLink: "https://maps.google.com/?q=335+South+Dixie+Dr+Vandalia+OH"
    },
    {
      id: 2,
      name: "Kettering",
      address: "3131 Wilmington Pike\nKettering, OH 45429",
      phone: "937.952.6021",
      email: "kettering@warehouse4coffee.com",
      hours: {
        weekdays: "6 AM - 6 PM",
        weekends: "8 AM - 6 PM"
      },
      image: branch2,
      mapLink: "https://maps.google.com/?q=3131+Wilmington+Pike+Kettering+OH"
    },
    {
      id: 3,
      name: "Beavercreek",
      address: "3210 Seajay Dr.\nBeavercreek, OH 45430",
      phone: "937.702.9208",
      email: "beavercreek@warehouse4coffee.com",
      hours: {
        weekdays: "6 AM - 6 PM",
        weekends: "8 AM - 6 PM"
      },
      image: branch3,
      mapLink: "https://maps.google.com/?q=3210+Seajay+Dr+Beavercreek+OH"
    }
  ];

  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-linear-to-b from-[#F5E6D3] via-[#FFF8F0] to-[#FDF5E6]">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-20 w-72 h-72 bg-[#C7A252]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#D4A574]/8 rounded-full blur-3xl" />
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
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#C7A252]/30 shadow-sm mb-4">
            <MapPin className="w-4 h-4 text-[#8B5E3C]" />
            <span className="text-[#6B4226] text-xs font-semibold tracking-wider">OUR LOCATIONS</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] mb-4">
            Find Your Nearest <span className="bg-linear-to-r from-[#8B5E3C] via-[#C7A252] to-[#8B5E3C] bg-clip-text text-transparent">Coffee Haven</span>
          </h2>
          
          <p className="text-[#5C3D2E] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Visit us at any of our three convenient locations across the Miami Valley
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {branches.map((branch, index) => (
            <div
              key={branch.id}
              className="group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glassmorphic Card */}
              <div className="relative h-full bg-white/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 border border-white/40">
                
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Location Name Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <Coffee className="w-4 h-4 text-[#8B5E3C]" />
                      <h3 className="font-serif text-xl font-bold text-[#2C1810]">{branch.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8B5E3C] mt-0.5 shrink-0" />
                    <p className="text-[#5C3D2E] text-sm leading-relaxed whitespace-pre-line">
                      {branch.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#8B5E3C] shrink-0" />
                    <a href={`tel:${branch.phone}`} className="text-[#5C3D2E] text-sm hover:text-[#8B5E3C] transition-colors duration-300">
                      {branch.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#8B5E3C] shrink-0" />
                    <a href={`mailto:${branch.email}`} className="text-[#5C3D2E] text-sm hover:text-[#8B5E3C] transition-colors duration-300 break-all">
                      {branch.email}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 pt-2 border-t border-[#C7A252]/20">
                    <Clock className="w-5 h-5 text-[#8B5E3C] mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#2C1810] font-semibold text-sm">Mon-Fri</span>
                        <span className="text-[#5C3D2E] text-sm">{branch.hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#2C1810] font-semibold text-sm">Sat-Sun</span>
                        <span className="text-[#5C3D2E] text-sm">{branch.hours.weekends}</span>
                      </div>
                    </div>
                  </div>

                  {/* Get Directions Button */}
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn block w-full mt-4 px-6 py-2.5 bg-linear-to-r from-[#8B5E3C] to-[#C7A252] rounded-full font-semibold text-white text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Directions
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#C7A252]/0 via-[#C7A252]/5 to-[#C7A252]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-[#C7A252]/30 shadow-sm">
            <Coffee className="w-5 h-5 text-[#8B5E3C]" />
            <p className="text-[#5C3D2E] text-sm">
              All locations offer free WiFi, indoor & outdoor seating, and contactless payment
            </p>
          </div>
        </div>
      </div>

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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Branches;