import React from 'react';

const Clients = () => {
  const clients = [
    {
      name: "TechCorp",
      industry: "Technology",
      testimonial: "Paradigm's strategic insights helped us optimize our product development pipeline and increase market share by 25%.",
      logo: "🏢"
    },
    {
      name: "GreenEnergy Solutions",
      industry: "Renewable Energy",
      testimonial: "The team's sustainability consulting expertise was invaluable in helping us scale our operations while maintaining our environmental commitments.",
      logo: "🌱"
    },
    {
      name: "HealthTech Innovations",
      industry: "Healthcare",
      testimonial: "Paradigm's market research and financial analysis provided the foundation for our successful Series A funding round.",
      logo: "🏥"
    },
    {
      name: "EduTech Pro",
      industry: "Education Technology",
      testimonial: "Their digital transformation strategies helped us modernize our platform and improve user engagement by 40%.",
      logo: "📚"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-berkeley-blue mb-6">
              Our Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've partnered with forward-thinking organizations across diverse industries 
              to deliver exceptional results and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">
                    {client.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-berkeley-blue">
                      {client.name}
                    </h3>
                    <p className="text-gray-600">
                      {client.industry}
                    </p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "{client.testimonial}"
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-berkeley-blue text-white rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-6">
                Join our growing list of satisfied clients and experience the Paradigm difference.
              </p>
              <button className="bg-berkeley-gold text-berkeley-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients; 