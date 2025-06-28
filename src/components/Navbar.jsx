import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="DreamDay.png" 
              alt="DreamDay Logo" 
              className="h-14 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          </div>

          {/* Desktop Menu */}
          <div className=" md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#295185] hover:text-[#fd7aa3] transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#295185] hover:text-[#fd7aa3] transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('weddings')}
              className="text-[#295185] hover:text-[#fd7aa3] transition-colors duration-300 font-medium"
            >
              Weddings
            </button>
            <button
              onClick={() => scrollToSection('corporate')}
              className="text-[#295185] hover:text-[#fd7aa3] transition-colors duration-300 font-medium"
            >
              Corporate
            </button>
            <button
              onClick={() => scrollToSection('social')}
              className="text-[#295185] hover:text-[#fd7aa3] transition-colors duration-300 font-medium"
            >
              Social Events
            </button>
            <button
              onClick={() => scrollToSection('launches')}
              className="text-[#295185] hover:text-[#fd7aa3] transition-colors duration-300 font-medium"
            >
              Launches
            </button>
            <button
              onClick={() => scrollToSection('consultation')}
              className="bg-[#FEACC6] text-[#1d395e] px-4 py-2 rounded-lg font-semibold hover:bg-[#fd7aa3] transition-colors duration-300"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#1d395e] hover:text-[#fd7aa3] transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#ffdee9]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-[#295185] hover:text-[#fd7aa3] hover:bg-[#ffdee9] rounded-md transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-[#295185] hover:text-[#fd7aa3] hover:bg-[#ffdee9] rounded-md transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('weddings')}
                className="block w-full text-left px-3 py-2 text-[#295185] hover:text-[#fd7aa3] hover:bg-[#ffdee9] rounded-md transition-colors duration-300"
              >
                Weddings
              </button>
              <button
                onClick={() => scrollToSection('corporate')}
                className="block w-full text-left px-3 py-2 text-[#295185] hover:text-[#fd7aa3] hover:bg-[#ffdee9] rounded-md transition-colors duration-300"
              >
                Corporate Events
              </button>
              <button
                onClick={() => scrollToSection('social')}
                className="block w-full text-left px-3 py-2 text-[#295185] hover:text-[#fd7aa3] hover:bg-[#ffdee9] rounded-md transition-colors duration-300"
              >
                Social Events
              </button>
              <button
                onClick={() => scrollToSection('launches')}
                className="block w-full text-left px-3 py-2 text-[#295185] hover:text-[#fd7aa3] hover:bg-[#ffdee9] rounded-md transition-colors duration-300"
              >
                Brand Launches
              </button>
              <button
                onClick={() => scrollToSection('consultation')}
                className="block w-full text-left px-3 py-2 bg-[#FEACC6] text-[#1d395e] rounded-md font-semibold hover:bg-[#fd7aa3] transition-colors duration-300 mt-2"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;