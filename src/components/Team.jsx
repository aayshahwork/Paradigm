import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "President",
      major: "Business Administration",
      year: "Senior",
      image: "👩‍💼",
      bio: "Leading strategic initiatives and client relationships with expertise in market analysis and business development."
    },
    {
      name: "Marcus Rodriguez",
      role: "Vice President",
      major: "Economics",
      year: "Senior",
      image: "👨‍💼",
      bio: "Specializing in financial modeling and economic analysis to drive data-driven business decisions."
    },
    {
      name: "Priya Patel",
      role: "Director of Operations",
      major: "Industrial Engineering",
      year: "Junior",
      image: "👩‍🔬",
      bio: "Optimizing processes and managing project delivery with a focus on operational excellence."
    },
    {
      name: "Alex Thompson",
      role: "Director of Technology",
      major: "Computer Science",
      year: "Junior",
      image: "👨‍💻",
      bio: "Leading digital transformation initiatives and technology strategy for our clients."
    },
    {
      name: "Emily Zhang",
      role: "Director of Sustainability",
      major: "Environmental Science",
      year: "Senior",
      image: "👩‍🌾",
      bio: "Advising on sustainable business practices and environmental impact assessment."
    },
    {
      name: "David Kim",
      role: "Director of Marketing",
      major: "Marketing",
      year: "Junior",
      image: "👨‍🎨",
      bio: "Developing comprehensive marketing strategies and brand positioning for client success."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-berkeley-blue mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of Berkeley students brings together expertise from various disciplines 
              to deliver comprehensive consulting solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-semibold text-berkeley-blue mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg font-medium text-berkeley-gold mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    {member.major}
                  </p>
                  <p className="text-sm text-gray-500">
                    Class of {member.year}
                  </p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-berkeley-blue text-white rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Join Our Team
              </h3>
              <p className="text-xl mb-6">
                We're always looking for talented Berkeley students to join our consulting team.
              </p>
              <button className="bg-berkeley-gold text-berkeley-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 