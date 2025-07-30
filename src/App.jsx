import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      <main>
        <Hero />
        
        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">About Paradigm Consulting</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Paradigm Consulting is UC Berkeley's premier student consulting organization, 
                delivering innovative solutions to industry leaders and startups alike. 
                Our team of talented students brings fresh perspectives and cutting-edge 
                methodologies to solve complex business challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since our founding, we've worked with over 50+ clients across various industries, 
                from technology and healthcare to finance and sustainability. Our consultants 
                gain hands-on experience while making a real impact on businesses and organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Analysis</h3>
                  <p className="text-gray-600">
                    Comprehensive market research, competitive analysis, and strategic planning 
                    to help your business make informed decisions.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation Consulting</h3>
                  <p className="text-gray-600">
                    Digital transformation, process optimization, and innovation strategy 
                    to keep your organization ahead of the curve.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Strategy</h3>
                  <p className="text-gray-600">
                    Business development, market expansion, and scaling strategies 
                    to accelerate your company's growth trajectory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-16">Our Impact</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-lg">Clients Served</div>
                </div>
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-lg">Projects Completed</div>
                </div>
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">$2M+</div>
                  <div className="text-lg">Value Generated</div>
                </div>
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-lg">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-12">
                Join our team of consultants or partner with us for your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
                  JOIN OUR TEAM
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                  PARTNER WITH US
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
