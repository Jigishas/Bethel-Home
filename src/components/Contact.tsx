import React from 'react';

const Contact: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   alert('Thank you for your message! We will get back to you soon.');
  //   setFormData({ name: '', email: '', subject: '', message: '' });
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-24 bg-gradient-to-b from-gray-50 via-white to-white overflow-hidden"
    >
      {/* Decorative background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-3">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mb-5" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about how you can help? Want to visit us or sponsor a child?
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form (disabled — uncomment this block together with the formData/handleChange handlers above to re-enable) */}
        {/* <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="donation">Donation Inquiry</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="sponsorship">Child Sponsorship</option>
                  <option value="visit">Visiting Bethel Home</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div> */}

        {/* Contact Method Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Address Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-amber-200 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.776-4.776a1 1 0 011.414-1.414L9 18.586V5a1 1 0 012 0v12.586l2.829-2.829a1 1 0 011.414 1.414z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600 leading-relaxed">
              Bethel Faith Home<br />
              P.O. Box 301<br />
              Londiani, Kenya
            </p>
          </div>

          {/* Phone Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-amber-200 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 leading-relaxed">
              <a href="tel:+254722458294" className="block hover:text-amber-600 transition-colors">+254 722 458 294</a>
              <a href="tel:+254717539262" className="block hover:text-amber-600 transition-colors">+254 717 539 262</a>
            </p>
          </div>

          {/* Email Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-amber-200 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600 leading-relaxed break-all">
              <a href="mailto:bethelchildrenshome8@gmail.com" className="hover:text-amber-600 transition-colors">bethelchildrenshome8@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Visiting Hours + Call to Action */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Visiting Hours */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Visiting Hours</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex justify-between py-3.5">
                <span className="text-gray-600">Monday – Friday</span>
                <span className="font-semibold text-gray-800">9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between py-3.5">
                <span className="text-gray-600">Saturday</span>
                <span className="font-semibold text-gray-800">10:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between py-3.5">
                <span className="text-gray-600">Sunday</span>
                <span className="font-semibold text-amber-600">By Appointment</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4 flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              We welcome visitors by appointment. Please contact us in advance to schedule your visit.
            </p>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3">Planning a Visit?</h3>
            <p className="text-amber-50 leading-relaxed mb-6">
              Reach out ahead of time and we'll prepare a warm Bethel welcome for you and your loved ones.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+254722458294"
                className="inline-flex items-center gap-2 bg-white text-amber-700 font-semibold px-5 py-3 rounded-full hover:bg-amber-50 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <a
                href="mailto:bethelchildrenshome8@gmail.com"
                className="inline-flex items-center gap-2 border-2 border-white/70 text-white font-semibold px-5 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
