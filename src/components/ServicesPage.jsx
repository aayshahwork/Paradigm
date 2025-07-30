import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: "Strategy Consulting",
      description: "Develop comprehensive business strategies that drive growth and competitive advantage for organizations of all sizes.",
      icon: "🎯",
      features: [
        "Market entry strategies",
        "Competitive analysis",
        "Business model optimization",
        "Growth planning"
      ]
    },
    {
      title: "Market Research & Analysis",
      description: "In-depth market analysis and consumer insights to inform strategic decisions and identify opportunities.",
      icon: "📊",
      features: [
        "Consumer behavior analysis",
        "Market sizing and segmentation",
        "Competitive landscape mapping",
        "Trend analysis and forecasting"
      ]
    },
    {
      title: "Financial Analysis & Modeling",
      description: "Comprehensive financial modeling and analysis to optimize business performance and support decision-making.",
      icon: "💰",
      features: [
        "Financial forecasting",
        "Valuation analysis",
        "Investment due diligence",
        "Performance optimization"
      ]
    },
    {
      title: "Operations Optimization",
      description: "Streamline processes and improve operational efficiency across your organization.",
      icon: "⚙️",
      features: [
        "Process improvement",
        "Supply chain optimization",
        "Cost reduction strategies",
        "Performance measurement"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Navigate the digital landscape with innovative technology solutions and strategies.",
      icon: "🚀",
      features: [
        "Technology strategy",
        "Digital adoption planning",
        "E-commerce optimization",
        "Data analytics implementation"
      ]
    },
    {
      title: "Policy & Research",
      description: "Develop policy recommendations and conduct research for think tanks and government organizations.",
      icon: "📋",
      features: [
        "Policy analysis",
        "Research methodology",
        "Impact assessment",
        "Stakeholder engagement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive consulting solutions tailored to meet your organization's unique needs and challenges.
            </p>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border-2 border-black bg-white text-black py-3 px-6 rounded font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to deliver exceptional results for our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Discovery</h3>
                <p className="text-gray-600">
                  We begin by understanding your organization's unique challenges and objectives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Analysis</h3>
                <p className="text-gray-600">
                  Our team conducts thorough research and analysis to identify opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Strategy</h3>
                <p className="text-gray-600">
                  We develop comprehensive strategies and actionable recommendations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Implementation</h3>
                <p className="text-gray-600">
                  We support you in implementing solutions and measuring results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how Berkeley Consulting can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Schedule a Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 