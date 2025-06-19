import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#112137] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl font-bold text-[#FEACC6] mb-4">
              DREAMDAY
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Creating unforgettable moments with meticulous attention to detail. 
              From intimate gatherings to grand celebrations, we bring your vision 
              to life with elegance and sustainability at the forefront.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:info@dreamday.com"
                className="text-[#fd7aa3] hover:text-[#FEACC6] transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="tel:+1234567890"
                className="text-[#fd7aa3] hover:text-[#FEACC6] transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#fd7aa3] hover:text-[#FEACC6] transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#fd7aa3] hover:text-[#FEACC6] transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#FEACC6] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('weddings')}
                  className="text-gray-300 hover:text-[#fd7aa3] transition-colors duration-300"
                >
                  Wedding Planning
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('corporate')}
                  className="text-gray-300 hover:text-[#fd7aa3] transition-colors duration-300"
                >
                  Corporate Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('social')}
                  className="text-gray-300 hover:text-[#fd7aa3] transition-colors duration-300"
                >
                  Social Celebrations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('launches')}
                  className="text-gray-300 hover:text-[#fd7aa3] transition-colors duration-300"
                >
                  Brand Launches
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#FEACC6] mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-1 text-[#fd7aa3]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-gray-300">123 Event Street</p>
                  <p className="text-gray-300">Dream City, DC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#fd7aa3]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-gray-300">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#fd7aa3]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-gray-300">hello@dreamday.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#295185] mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 DreamDay Event Planning. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#fd7aa3] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fd7aa3] transition-colors duration-300">
                Terms of Service
              </a>
              <button
                onClick={() => scrollToSection('consultation')}
                className="text-[#FEACC6] hover:text-[#fd7aa3] transition-colors duration-300 font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div 
        className="h-1 bg-gradient-to-r from-[#FEACC6] via-[#fd7aa3] to-[#ffdee9]"
      ></div>
    </footer>
  );
};

export default Footer;