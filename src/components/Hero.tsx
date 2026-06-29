import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Brighter Futures,
            <span className="block text-amber-400">One Child at a Time</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Providing a safe, loving, and nurturing home for orphaned and vulnerable children.
            We believe every child deserves a family and the opportunity to thrive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-amber-500 hover:border-amber-600"
            >
              How to Help
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
