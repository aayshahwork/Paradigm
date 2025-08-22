'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
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
            Select <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto font-playfair"
          >
            Our team brings expertise and experience in both strategic consulting and technical implementation. 
            We deliver comprehensive solutions that drive meaningful organizational change across diverse industries.
          </motion.p>
        </motion.div>

        {/* Combined Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Project Images Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-playfair">Strategy Projects</h3>
              <Image
                src="/StrategyClients.png"
                alt="Strategy Clients"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-playfair">Technical Consulting</h3>
              <Image
                src="/TechnicalClients.png"
                alt="Technical Clients"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Combined Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 font-playfair">Our Comprehensive Approach</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 font-playfair">Strategic Excellence</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 font-playfair">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Market Analysis & Competitive Intelligence
                  </li>
                  <li className="flex items-center text-gray-700 font-playfair">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Business Model Innovation
                  </li>
                  <li className="flex items-center text-gray-700 font-playfair">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Strategic Planning & Execution
                  </li>
                  <li className="flex items-center text-gray-700 font-playfair">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Organizational Development
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 font-playfair">Technical Innovation</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 font-playfair">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                    Digital Transformation & Automation
                  </li>
                  <li className="flex items-center text-gray-700 font-playfair">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                    Data Analytics & AI Implementation
                  </li>
                  <li className="flex items-center text-gray-700 font-playfair">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                    Technology Architecture & Integration
                  </li>
                  <li className="flex items-center text-gray-700 font-playfair">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                    Cybersecurity & Risk Management
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services