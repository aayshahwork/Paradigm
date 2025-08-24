'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Services = () => {
  return (
    <section id="services" className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12 bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-blue-100/30 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
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

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-playfair"
          >
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto font-nunito mb-8"
          >
            Paradigm offers a wide variety of scopes from strategy consulting to technical consulting projects, delivering comprehensive solutions that drive meaningful organizational change.
          </motion.p>
        </motion.div>

        {/* Our Services Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="relative max-w-6xl w-full">
            <Image
              src="/OurServuces.png"
              alt="Our Services"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Services Sections */}
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-playfair">Strategic Consulting</h3>
              <Image
                src="/StratClients.png"
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
                src="/TechClients.png"
                alt="Technical Clients"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Services