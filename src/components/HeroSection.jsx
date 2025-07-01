import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="bg-[#1d395e] text-white py-20 px-4 text-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(29, 57, 94, 0.7), rgba(29, 57, 94, 0.7)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="hearts" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="1200" height="600" fill="url(%23hearts)"/></svg>')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Logo */}
      <div className="mb-8">
        <img 
          src="DreamDay.png" 
          alt="DreamDay Logo" 
          className="mx-auto w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
        />
      </div>
      
      <h1 className="font-serif text-5xl md:text-7xl mb-4 font-bold">DREAMDAY</h1>
      <p className="text-2xl md:text-3xl mb-8 font-light">Every Detail, Perfectly Planned</p>
      <a
        href="#consultation"
        className="inline-block bg-[#FEACC6] text-[#1d395e] font-semibold py-3 px-6 rounded-lg hover:bg-[#fd7aa3] transition-colors duration-300"
      >
        Plan Your Perfect Day
      </a>
    </section>
  );
};

export default HeroSection;