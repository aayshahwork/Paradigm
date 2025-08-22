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
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-poppins"
          >
            What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </motion.h2>
        </motion.div>

        {/* Strategy Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-3xl font-bold mb-6 text-gray-900 font-poppins">Strategy Projects</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-poppins">
                  Our strategy consulting services help organizations navigate complex business challenges 
                  and identify growth opportunities through data-driven insights and strategic planning.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 font-poppins">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Market Analysis & Competitive Intelligence
                  </li>
                  <li className="flex items-center text-gray-700 font-poppins">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Business Model Innovation
                  </li>
                  <li className="flex items-center text-gray-700 font-poppins">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Strategic Planning & Execution
                  </li>
                  <li className="flex items-center text-gray-700 font-poppins">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Organizational Development
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <Image
                  src="/StrategyClients.png"
                  alt="Strategy Clients"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Technical Consulting Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <Image
                  src="/TechnicalClients.png"
                  alt="Technical Clients"
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
                className="order-1 lg:order-2"
              >
                <h3 className="text-3xl font-bold mb-6 text-gray-900 font-poppins">Technical Consulting</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-poppins">
                  Our technical consulting expertise spans cutting-edge technologies and digital transformation 
                  initiatives, helping organizations leverage technology for competitive advantage.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 font-poppins">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                    Digital Transformation & Automation
                  </li>
                  <li className="flex items-center text-gray-700 font-poppins">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                    Data Analytics & AI Implementation
                  </li>
                  <li className="flex items-center text-gray-700 font-poppins">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                    Technology Architecture & Integration
                  </li>
                  <li className="flex items-center text-gray-700 font-poppins">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                    Cybersecurity & Risk Management
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services