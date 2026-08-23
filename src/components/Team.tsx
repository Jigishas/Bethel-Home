import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: React.ReactNode;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  image
}) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>

        <div className="h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200">
          {image}
        </div>

        {/* Social Media */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">

            {/* X / Twitter */}
            <a
              href="#"
              aria-label={`${name} Twitter`}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.459-2.548z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label={`${name} Instagram`}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98 0-1.28.014-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label={`${name} LinkedIn`}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {name}
        </h3>

        <p className="text-amber-600 font-medium text-sm mb-3">
          {role}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {

  const teamMembers = [
    {
      name: "Dr. Eva Gilger",
      role: "Founder & First Director — 1985",
      bio: "Dr. Eva Gilger founded Bethel Faith Home in 1985 with a vision to provide loving care, protection and support to every child in need. Her founding vision established the foundation for Bethel Faith Home and its commitment to children.",
      image: (
        <img
          src="/icon female.jpg"
          alt="Dr. Eva Gilger"
          className="w-full h-full object-cover"
        />
      )
    },
    {
      name: "Lucy Kirui",
      role: "Second Director & Head of Institution — 2002",
      bio: "Lucy Kirui became the second director after Dr. Eva Gilger stepped down in 2002. A former principal of Londiani Girls, she was passionate about ensuring every child received quality education and the tools needed to succeed in life.",
      image: (
        <img
          src="/icon female.jpg"
          alt="Lucy Kirui"
          className="w-full h-full object-cover"
        />
      )
    },
    {
      name: "Dr. Hosea Poriot",
      role: "Third Director & Head of Institution — 2013",
      bio: "Dr. Hosea Poriot became the third director following the passing of Lucy Kirui in November 2013. He was dedicated to providing comprehensive healthcare, emotional support and holistic care to all the children at Bethel Faith Home.",
      image: (
        <img
          src="/icon male.jpg"
          alt="Dr. Hosea Poriot"
          className="w-full h-full object-cover"
        />
      )
    },
    {
      name: "Rev. Paul Matingwony",
      role: "Head of Institution — 2014",
      bio: "Rev. Paul Matingwony took over leadership of the institution in 2014. He focused on developing innovative programmes that help children build life skills, discover their unique talents and prepare for a meaningful future.",
      image: (
        <img
          src="/icon male.jpg"
          alt="Rev. Paul Matingwony"
          className="w-full h-full object-cover"
        />
      )
    },
    {
      name: "Pastor Rose Kirui",
      role: "Director & Head of Institution — December 2023 to Present",
      bio: "Pastor Rose Kirui took over leadership in December 2023 and continues to serve as the Director and Head of Institution. She works tirelessly to provide love, care and support to every child at Bethel Faith Home while guiding the institution toward a stronger future.",
      image: (
        <img
          src="/icon female.jpg"
          alt="Pastor Rose Kirui"
          className="w-full h-full object-cover"
        />
      )
    }
  ];

  return (
    <section
      id="team"
      className="py-24 bg-gray-50 bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">

          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Our Leadership
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            The People Who{" "}
            <span className="gradient-text">
              Have Led Bethel
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Bethel Faith Home has been guided by dedicated leaders who have
            carried forward its mission of providing love, care, education
            and support to children and young people across generations.
          </p>

        </div>

        {/* Leadership Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              {...member}
            />
          ))}

        </div>

        {/* Leadership Message */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">

            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.5l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9v-5l7-4z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              A Legacy of Leadership and Service
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Since its founding in 1985, Bethel Faith Home has continued
              to build on a legacy of compassionate leadership. Each leader
              has contributed to the growth and development of the institution,
              ensuring that its commitment to the care, education, wellbeing
              and future of every child remains strong.
            </p>

          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">

          <div className="inline-flex flex-col sm:flex-row gap-4">

            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-full transition-all"
            >
              <span>Join Our Team</span>

              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 font-semibold px-8 py-4 rounded-full transition-all"
            >
              <span>Become a Volunteer</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Team;