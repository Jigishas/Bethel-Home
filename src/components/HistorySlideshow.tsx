import React, { useState, useEffect } from 'react';

// History photos 1 - 14 located in the public folder
const historyPhotos: string[] = Array.from(
  { length: 14 },
  (_, i) => `/History photo ${i + 1}.jpeg`
);

const SLIDE_INTERVAL_MS = 5000; // Shift to the next image every 5 seconds

const HistorySlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % historyPhotos.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-amber-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[320px] md:h-[480px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 bg-gray-900">
          {/* Slides */}
          {historyPhotos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt={`Bethel Home history photo ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-[1200ms] ease-in-out ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          ))}

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

          {/* Photo counter */}
          <div className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md text-white text-sm font-medium px-3 py-1.5 rounded-full ring-1 ring-white/30">
            {currentIndex + 1} / {historyPhotos.length}
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-full ring-1 ring-white/25 shadow-lg">
            {historyPhotos.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to history photo ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-amber-400'
                    : 'w-2.5 bg-white/60 hover:bg-white/90'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySlideshow;
