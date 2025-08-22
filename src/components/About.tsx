'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-playfair"
          >
            Who We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Are</span>
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900 font-playfair">Paradigm Consulting</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-playfair">
                Paradigm serves as an advisor to organizations through a wide range of consulting services. 
                We combine the fresh perspectives and innovative thinking of UC Berkeley students with 
                rigorous analytical methods and real-world business experience.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-playfair">
                Our team brings cutting-edge academic insights, diverse industry knowledge, and a 
                commitment to delivering actionable solutions that drive meaningful organizational change.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700 font-playfair">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  Strategic Advisory & Business Planning
                </li>
                <li className="flex items-center text-gray-700 font-playfair">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  Operational Excellence & Process Improvement
                </li>
                <li className="flex items-center text-gray-700 font-playfair">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  Digital Transformation & Technology Integration
                </li>
                <li className="flex items-center text-gray-700 font-playfair">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  Market Research & Competitive Analysis
                </li>
              </ul>
            </motion.div>

            {/* Alumni Success Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="text-2xl font-bold mb-6 text-gray-900 font-playfair">Where Our Alumni Have Ended Up</h4>
              <Image
                src="/Paradigm Alum.png"
                alt="Paradigm Alumni Success Stories"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-gray-600 mt-4 italic font-playfair">
                Our alumni have gone on to leadership positions at top companies worldwide
              </p>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 font-playfair">Our Impact</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-playfair">
              Since 2003, Paradigm has built a reputation for delivering exceptional results through our 
              unique combination of academic rigor, innovative thinking, and practical business acumen. 
              We take pride in developing the next generation of business leaders while creating lasting value for our clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About