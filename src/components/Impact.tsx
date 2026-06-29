import React from 'react';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Transforming Lives Every Day
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See the difference your support makes in the lives of children who need it most.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-6 text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div className="text-amber-100">Children Supported</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-6 text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
            <div className="text-amber-100">School Attendance</div>
          </div>
          <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-6 text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
            <div className="text-amber-100">Years of Service</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-center text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
            <div className="text-amber-100">Success Stories</div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Success Story
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-4">
                Maria's Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                When Maria first came to Bethel Home at age 7, she was shy and had never attended 
                school. Through the dedicated care of our staff and the support of our donors, 
                she not only caught up with her peers but excelead in her studies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, Maria is 18 years old and has graduated from high school with honors. 
                She plans to become a teacher so she can help other children have the same 
                opportunity she had.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
              >
                <span>Sponsor a child today</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-lg">Maria, Age 18</p>
                  <p className="text-amber-100 text-sm">Now a honor student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
