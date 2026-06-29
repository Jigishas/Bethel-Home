import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">B</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Bethel Home</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">About Us</a>
            <a href="#pillars" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Our Programs</a>
            <a href="#impact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Impact</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Contact Us</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">About Us</a>
              <a href="#pillars" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Our Programs</a>
              <a href="#impact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Impact</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Contact Us</a>
              <a
                href="#contact"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-full text-center transition-all"
              >
                Donate Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
