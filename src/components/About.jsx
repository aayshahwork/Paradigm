import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* WHO WE ARE Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-left">
              WHO WE ARE
            </h2>
            <div className="text-left mb-12">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                Berkeley Consulting has been an advisor for over 30 years to a broad range of organizations, 
                from Fortune 500 companies to start-ups and non-profits. Founded in 1996 with a mission to 
                gather bright minds and solve real-world issues, we have grown into a trusted partner. 
                We develop our members' consulting abilities and career-agnostic problem-solving skills 
                applicable to tech, banking, and public service.
              </p>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-black mb-2">200+</div>
                <div className="text-lg text-gray-600">Projects Done</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-black mb-2">30</div>
                <div className="text-lg text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-black mb-2">3264</div>
                <div className="text-lg text-gray-600">Cups Of Coffee</div>
              </div>
            </div>
          </div>

          {/* WHAT WE OFFER Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
              WHAT WE OFFER
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: HISTORY OF EXCELLENCE */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    HISTORY OF EXCELLENCE
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Berkeley Consulting is the oldest consulting group on Berkeley's campus, with the freedom 
                  to pursue various projects, from local governments to global tech companies, think tanks, 
                  and non-profits.
                </p>
                <button className="w-full border-2 border-black bg-white text-black py-3 px-6 rounded font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                  View Past Projects
                </button>
              </div>

              {/* Card 2: OUR SERVICES */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    OUR SERVICES
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We offer developing international expansion guides, legal analysis, research, 
                  data-driven projects, statistical modeling, and policy recommendations for think tanks.
                </p>
                <button className="w-full border-2 border-black bg-white text-black py-3 px-6 rounded font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                  Services Offered
                </button>
              </div>

              {/* Card 3: BERKELEY'S BRIGHTEST */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    BERKELEY'S BRIGHTEST
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Berkeley Consulting develops our members' experiences and career-agnostic problem-solving 
                  skills, enabling alumni to make an impact at top consulting firms, banks, and technology companies.
                </p>
                <button className="w-full border-2 border-black bg-white text-black py-3 px-6 rounded font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                  Learn About BC
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 