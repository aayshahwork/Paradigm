'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      {/* Who We Are Section - Page-like styling */}
      <section id="about" className="min-h-screen section-padding bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 relative">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-100/50 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Page Title with divider */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1 max-w-xs"></div>
                <div className="px-6">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1 max-w-xs"></div>
              </div>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-playfair mb-8">
                  Who We Are
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed font-nunito">
                  Alpha Epsilon Zeta (AEZ) is an undergraduate professional fraternity at the University of California, Berkeley. AEZ distinguishes itself from traditional professional fraternities by embracing a multidisciplinary focus. The brothers of AEZ come from a wide variety of majors, ranging from biology to business to engineering, and each brother strives to be well-versed in all aspects of every academic discipline. We are dedicated to promoting and fostering professionalism, brotherhood, unity, and tradition.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed font-nunito">
                  Since its establishment in 2003, AEZ has grown substantially and currently has more than 200 active and alumni brothers. AEZ's alumni have leveraged the skills gained during their time as actives to excel at top firms such as Meta, Google, McKinsey, and Goldman Sachs and renowned graduate schools including Stanford Medical School and Harvard Business School.
                </p>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative">
                  <Image
                    src="/whoweare.jpg"
                    alt="Who We Are"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-lg -z-10"></div>
                </div>
              </motion.div>
            </div>

            {/* Section Divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center my-16"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-8 h-px bg-blue-400"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-8 h-px bg-blue-400"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-blue-400"></div>
              </div>
            </motion.div>

            {/* Our Process Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - About Us Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative">
                  <Image
                    src="/aboutus.jpg"
                    alt="Our Process"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tl from-purple-200/30 to-blue-200/30 rounded-lg -z-10"></div>
                </div>
              </motion.div>

              {/* Right Side - Process Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-6">
                  Our Process
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed font-nunito">
                  We accept the top 6% of UC Berkeley participants. Our consultants go through a rigorous development process before their first engagement that enables them to think critically and grow professionally. Each team consists of a variety of majors, backgrounds, and interests which combine to offer creative solutions.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed font-nunito">
                  Each project has a team of 4-5 consultants and two project leaders who put in nearly 1,000 hours of total work over the 10-12 week project engagement. Our consultants are driven by an innate desire to learn and apply skills being taught in class to solve real business problems.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default About