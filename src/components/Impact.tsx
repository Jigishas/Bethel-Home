import React, { useState } from 'react';

const Impact: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      name: "Timothy Kemei",
      role: "Egerton University Graduate • Mass Media",
      image: "icon male.jpg",
      story:
        "Timothy Kemei is one of the many young people whose journey at Bethel Faith Home became a foundation for a meaningful and impactful life. Through education, guidance and the support he received, Timothy pursued his dreams and graduated from Egerton University with a degree in Mass Media. His journey demonstrates how investing in a child's education and potential can open doors to a brighter future. Timothy went on to serve in the Governor's office, where he contributed his skills and experience. His life remains a testament to the lasting impact of education, mentorship and the Bethel family.",
      highlight: "From Bethel to University and Public Service"
    },
    {
      name: "Beatrice Koskei",
      role: "Nurse • United States",
      image: "icon.jpg",
      story:
        "Beatrice Koskei's story is one of determination, education and reaching beyond borders. The foundation she received at Bethel Faith Home helped prepare her to pursue her ambitions and build a career in healthcare. Today, Beatrice is a qualified nurse working in the United States. Her journey reflects what is possible when a child is given the opportunity to learn, grow and believe in a future beyond their circumstances.",
      highlight: "From Bethel to a Nursing Career in the USA"
    },
    {
      name: "Eva Maritim",
      role: "Teacher • 10+ Years of Experience",
      image: "icon.jpg",
      story:
        "Eva Maritim has turned her own journey into an opportunity to positively influence the next generation. Today, she is a teacher with more than ten years of professional experience. Through her career, Eva continues to make a difference in the lives of young people by sharing knowledge, encouragement and guidance. Her story represents the power of education not only to transform an individual life, but also to create a ripple effect that reaches many others.",
      highlight: "From a Bethel Child to an Educator"
    },
    {
      name: "A Bethel Success Story",
      role: "Banker & Business Person",
      image: "icon male.jpg",
      story:
        "Another inspiring Bethel journey belongs to a former child of the home who has gone on to build a successful career in banking while also developing a path in business. This journey reflects the importance of equipping young people with education, confidence, life skills and the independence needed to navigate life beyond the home. Today, this former Bethel child represents the kind of success and self-reliance that the institution hopes to nurture in every young person.",
      highlight: "From Bethel to Banking and Entrepreneurship"
    }
  ];

  const story = successStories[activeStory];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Our Impact
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Transforming Lives, Building Futures
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            For decades, Bethel Faith Home has helped children and young
            people discover their potential, pursue education and build
            meaningful lives beyond the institution.
          </p>
        </div>

        {/* Impact Message */}
        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 md:p-10 mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Every Child Has a Future
          </h3>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our greatest measure of impact is not only what we provide
            children today, but what they are able to achieve tomorrow.
            From university graduates and healthcare professionals to
            teachers, bankers and entrepreneurs, former Bethel children
            continue to make meaningful contributions to society.
          </p>
        </div>

        {/* Success Stories */}
        <div className="mb-16">

          <div className="text-center mb-10">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Success Stories
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
              From Bethel to the World
            </h3>
          </div>

          {/* Featured Story */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">

              {/* Image */}
              <div className="relative min-h-[350px] md:min-h-[500px]">
                {story.image ? (
                  <img
                    src={story.image}
                    alt={story.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center">
                    <svg
                      className="w-32 h-32 text-white/70"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-amber-200 text-sm font-semibold uppercase tracking-wider">
                    {story.highlight}
                  </p>

                  <h4 className="text-2xl font-bold mt-2">
                    {story.name}
                  </h4>
                </div>
              </div>

              {/* Story */}
              <div className="p-8 md:p-12 flex flex-col justify-center">

                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                  A Journey of Transformation
                </span>

                <h4 className="text-3xl font-bold text-gray-800 mt-2 mb-2">
                  {story.name}
                </h4>

                <p className="text-amber-600 font-medium mb-6">
                  {story.role}
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {story.story}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span className="text-gray-700 font-semibold">
                    A life transformed through opportunity
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Story Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

            {successStories.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActiveStory(index)}
                className={`text-left rounded-2xl p-5 border-2 transition-all duration-300 ${
                  activeStory === index
                    ? "border-amber-500 bg-amber-50 shadow-md"
                    : "border-gray-100 bg-white hover:border-amber-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeStory === index
                        ? "bg-amber-500 text-white"
                        : "bg-amber-100 text-amber-600"
                    }`}
                  >
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  <span className="font-bold text-gray-800 text-sm">
                    {item.name}
                  </span>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.role}
                </p>
              </button>
            ))}

          </div>
        </div>

        {/* Legacy / Impact Statement */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-amber-700 p-8 md:p-12 text-white">

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">

            <div>
              <span className="text-amber-100 font-semibold text-sm uppercase tracking-wider">
                Our Legacy
              </span>

              <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Your Support Creates Possibilities
              </h3>

              <p className="text-amber-50 leading-relaxed">
                Behind every success story is a child who was given an
                opportunity, someone who believed in their potential and
                a community that chose to care. By supporting Bethel Faith
                Home, you help create opportunities that can shape a child's
                entire future.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-40 h-40 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 21s-7-4.35-7-10a4 4 0 017-2.646A4 4 0 0119 11c0 5.65-7 10-7 10z"
                  />
                </svg>
              </div>
            </div>

          </div>

          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-white/5"></div>
          <div className="absolute -left-20 -top-20 w-48 h-48 rounded-full bg-white/5"></div>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <span>Support a Child's Future</span>

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
        </div>

      </div>
    </section>
  );
};

export default Impact;