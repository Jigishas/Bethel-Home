import React from 'react';

interface DonationTier {
  amount: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
}

const DonationSection: React.FC = () => {
  const donationTiers: DonationTier[] = [
    {
      amount: "$25",
      title: "Meal Sponsor",
      description: "Provide nutritious meals for one child for an entire week",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      popular: false
    },
    {
      amount: "$50",
      title: "Education Fund",
      description: "Cover school supplies, books, and educational materials for one month",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      popular: true
    },
    {
      amount: "$100",
      title: "Healthcare",
      description: "Provide medical check-ups, vitamins, and essential healthcare for one month",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      popular: false
    },
    {
      amount: "$200",
      title: "Full Sponsorship",
      description: "Cover all expenses - shelter, food, education, and healthcare for one month",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      popular: false
    }
  ];

  return (
    <section id="donate" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4">
            Support Our Cause
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ways to <span className="gradient-text">Make a Difference</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Your support transforms lives. Choose how you'd like to contribute and help us build brighter futures for children in need.
          </p>
        </div>

        {/* Donation Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {donationTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                tier.popular
                  ? 'border-amber-500 shadow-lg shadow-amber-500/20'
                  : 'border-white/20 hover:border-amber-500/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-400">
                  {tier.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-1">{tier.amount}</div>
                <h3 className="text-xl font-semibold mb-2">{tier.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>
              <button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-full transition-all duration-300">
                Donate Now
              </button>
            </div>
          ))}
        </div>

        {/* Additional Ways to Help */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 text-amber-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Become a Volunteer</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Share your time and skills. We need tutors, mentors, event helpers, and more.
            </p>
            <a href="#contact" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
              Learn More →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 text-amber-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Corporate Partnership</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Align your brand with our mission through corporate sponsorship.
            </p>
            <a href="#contact" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
              Learn More →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 text-amber-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Legacy Giving</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Include Bethel Home in your estate planning for lasting impact.
            </p>
            <a href="#contact" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
