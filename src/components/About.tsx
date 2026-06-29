import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-amber-100 rounded-2xl h-32 flex items-center justify-center">
                <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="bg-amber-200 rounded-2xl h-40 flex items-center justify-center">
                <span className="text-amber-700 font-semibold">Love</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-amber-300 rounded-2xl h-40 flex items-center justify-center">
                <span className="text-amber-800 font-semibold">Care</span>
              </div>
              <div className="bg-amber-100 rounded-2xl h-32 flex items-center justify-center">
                <svg className="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Welcome to Bethel Home
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
              A Place Where Every Child Belongs
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Bethel Home, we believe that every child deserves a safe, loving environment 
              where they can grow, learn, and thrive. Our mission is to provide comprehensive 
              care that nurtures not just their physical needs, but also their emotional 
              and educational development.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We create a family-like atmosphere where children feel secure, valued, and 
              empowered to reach their full potential. Through quality education, healthcare, 
              and emotional support, we help each child build the foundation for a successful future.
            </p>

            {/* Mission & Vision Tags */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3">
                <span className="text-amber-700 font-medium">Our Vision</span>
                <p className="text-gray-600 text-sm mt-1">Every child in a loving family</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3">
                <span className="text-amber-700 font-medium">Our Mission</span>
                <p className="text-gray-600 text-sm mt-1">Rescue, protect, nurture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
