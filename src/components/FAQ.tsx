import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "How can I sponsor a child at Bethel Home?",
      answer: "Sponsoring a child is a meaningful way to make a lasting impact. You can sponsor a child for as little as $50 per month, which covers their education, healthcare, nutrition, and emotional support. Simply fill out the contact form or call us directly to learn more about sponsorship programs and how you can build a connection with the child you support."
    },
    {
      question: "What percentage of my donation goes directly to the children?",
      answer: "We are proud to share that 85% of all donations go directly to program services for our children, including education, healthcare, nutrition, and emotional support. The remaining 15% covers essential administrative and fundraising costs to ensure our operations remain sustainable and effective."
    },
    {
      question: "Can I visit Bethel Home in person?",
      answer: "Absolutely! We welcome visitors by appointment Tuesday through Saturday, 10 AM to 4 PM. We recommend scheduling your visit at least one week in advance. During your visit, you'll meet our children and staff, see our facilities, and learn more about our programs. We also offer virtual tours for those who cannot visit in person."
    },
    {
      question: "How do you ensure the privacy and safety of the children?",
      answer: "The safety and privacy of our children is our top priority. We adhere to strict confidentiality policies and never share identifying information about our children publicly. All staff and volunteers undergo thorough background checks and receive ongoing safety training. We also work closely with child welfare authorities to ensure compliance with all regulations."
    },
    {
      question: "What types of donations do you accept?",
      answer: "We accept various forms of support including monetary donations (one-time or monthly), in-kind gifts (school supplies, clothing, food, toys), corporate sponsorships, and planned giving. We also appreciate volunteer time and professional services. Contact us to discuss the best way to contribute based on your interests and capabilities."
    },
    {
      question: "How can I volunteer at Bethel Home?",
      answer: "We welcome volunteers in many capacities! Opportunities include tutoring and mentoring, event planning and support, administrative assistance, fundraising, and special skills (music, art, sports). All volunteers must be 18+ and pass a background check. Complete our volunteer application form, and we'll contact you within 48 hours."
    },
    {
      question: "What is the age range of children at Bethel Home?",
      answer: "Our children range from infants to young adults up to age 21. We provide age-appropriate care and support at every stage of development. For older youth, we offer transition programs to help them become independent, including job training, higher education support, and life skills development."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, Bethel Home is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for your donation that you can use for tax purposes. For year-end tax planning, we also provide annual contribution statements for monthly donors."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            <span>Contact Us</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
