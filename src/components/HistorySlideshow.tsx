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
    <section className="relative w-full h-[320px] md:h-[480px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {historyPhotos.map((photo, index) => (
        <img
          key={photo}
          src={photo}
          alt={`Bethel Home history photo ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {historyPhotos.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to history photo ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-amber-400 scale-125'
                : 'bg-white/60 hover:bg-white/90'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HistorySlideshow;
