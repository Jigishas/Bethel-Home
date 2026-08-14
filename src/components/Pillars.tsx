import React from 'react';

interface PillarProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Pillar: React.FC<PillarProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Our Core Pillars
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We are committed to creating a safe, nurturing and sustainable
            environment where children and young people can grow, learn,
            develop their potential and build a brighter future.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Pillar 1 */}
          <Pillar
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            }
            title="Care & Protection"
            description="Providing children with a safe, loving and stable home where their physical, emotional and social wellbeing comes first."
          />

          {/* Pillar 2 */}
          <Pillar
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
            title="Education"
            description="Ensuring every child has access to quality education and the opportunity to pursue their abilities, talents and ambitions without financial barriers."
          />

          {/* Pillar 3 */}
          <Pillar
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422A12.083 12.083 0 0119 15.5c0 2.485-3.134 4.5-7 4.5s-7-2.015-7-4.5c0-.99.336-1.91.92-2.704L12 14z"
                />
              </svg>
            }
            title="Holistic Development"
            description="Nurturing character, leadership, faith, life skills, creativity and confidence so that children grow into responsible and independent adults."
          />

          {/* Pillar 4 */}
          <Pillar
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            }
            title="Health & Wellbeing"
            description="Supporting proper nutrition, healthcare, sanitation, emotional wellbeing and a healthy environment for every child."
          />

          {/* Pillar 5 */}
          <Pillar
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h8M12 8v8"
                />
              </svg>
            }
            title="Sustainable Agriculture"
            description="Using Bethel's land, water and agricultural resources to strengthen food security and progressively create sustainable income for the institution."
          />

          {/* Pillar 6 */}
          <Pillar
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
            title="Youth Empowerment"
            description="Preparing older children and graduates for life beyond Bethel through skills development, career guidance, mentorship, entrepreneurship and higher education."
          />

          {/* Pillar 7 */}
          <Pillar
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM8 11c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 20a6 6 0 0112 0M14 20a6 6 0 018 0"
                />
              </svg>
            }
            title="Community & Partnerships"
            description="Working with individuals, organizations, government, alumni and strategic partners to expand Bethel's impact and build a stronger future."
          />

          {/* Pillar 8 */}
          <Pillar
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 1.343-3 3v1h6v-1c0-1.657-1.343-3-3-3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 20h14M7 16h10M8 12h8M12 4v4"
                />
              </svg>
            }
            title="Sustainability & Stewardship"
            description="Building systems that progressively reduce dependence on emergency support through responsible financial management, productive assets, partnerships and income-generating initiatives."
          />

        </div>

        {/* Supporting Images */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="/Donations.jpeg"
            alt="Bethel donations"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />

          <img
            src="/students.jpeg"
            alt="Bethel students"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />

          <img
            src="/image 5.jpeg"
            alt="Bethel community"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />

          <img
            src="/image 6.jpeg"
            alt="Bethel activities"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Pillars;