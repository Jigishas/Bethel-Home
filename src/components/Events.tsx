import React, { useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

const Events: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const events: Event[] = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "March 15, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Bethel Home Ground",
      description: "Join us for a day of fun activities and sports competitions. Children will showcase their athletic talents and team spirit.",
      category: "sports"
    },
    {
      id: 2,
      title: "Easter Celebration",
      date: "April 20, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Main Hall",
      description: "Easter egg hunt, arts & crafts, and special performances by the children. Everyone is welcome!",
      category: "celebration"
    },
    {
      id: 3,
      title: "Health Check-up Camp",
      date: "May 5, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "Medical Center",
      description: "Free health screenings, dental check-ups, and wellness workshops for all children and staff.",
      category: "health"
    },
    {
      id: 4,
      title: "Annual Fundraiser Gala",
      date: "June 10, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Ballroom",
      description: "An elegant evening of dinner, live music, and auction to support our children's education and care.",
      category: "fundraiser"
    },
    {
      id: 5,
      title: "Back to School Drive",
      date: "September 5, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Community Center",
      description: "School supplies distribution and orientation for the new academic year. Help us prepare children for success!",
      category: "education"
    },
    {
      id: 6,
      title: "Thanksgiving Feast",
      date: "November 28, 2025",
      time: "12:00 PM - 4:00 PM",
      location: "Dining Hall",
      description: "A special Thanksgiving celebration with traditional meals, performances, and gratitude activities.",
      category: "celebration"
    }
  ];

  const categories = ['all', 'sports', 'celebration', 'health', 'fundraiser', 'education'];

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      sports: 'bg-green-100 text-green-700',
      celebration: 'bg-purple-100 text-purple-700',
      health: 'bg-red-100 text-red-700',
      fundraiser: 'bg-amber-100 text-amber-700',
      education: 'bg-blue-100 text-blue-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Upcoming Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Events & <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Join us for our upcoming events! Whether you're looking to volunteer, donate, or simply show your support, there's something for everyone.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.776-4.776a1 1 0 011.414-1.414L9 18.586V5a1 1 0 012 0v12.586l2.829-2.829a1 1 0 011.414 1.414z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                >
                  <span>Register Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            <span>View All Events</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
