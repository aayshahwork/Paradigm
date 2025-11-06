'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Services = () => {
  const strategyServices = [
    'Go-To-Market Strategy',
    'Business Model Innovation',
    'Customer Segmentation',
    'Cost Reduction',
    'Market Research',
    'Competitive Analysis'
  ]

  const technicalServices = [
    'Custom Software Development',
    'Legacy System Modernization',
    'UI/UX Design',
    'AI/ML Integration',
    'Cloud Architecture/Migration',
    'Alternative Analytics'
  ]

  return (
    <section id="services" className="min-h-screen section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 font-playfair"
          >
            OUR SERVICES
          </motion.h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-md"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-md"></div>
          </div>
          <motion.p
            className="text-xl text-gray-700 max-w-4xl mx-auto font-nunito"
          >
            Below are <span className="font-bold italic">examples of our capabilities</span> and services that we have provided for clients in the past. Paradigm prides itself on its multidisciplinary approach that allows us to <span className="font-bold">meet the unique needs of our clients</span>.
          </motion.p>
        </motion.div>

        {/* Services Venn Diagram Style */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Strategy Services - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {strategyServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-1 bg-red-500 group-hover:w-12 transition-all duration-300"></div>
                  <span className="text-red-600 font-bold text-lg font-nunito group-hover:text-red-700 transition-colors">
                    {service}
                  </span>
                </motion.div>
              ))}
            </motion.div>


            {/* Center - Venn Diagram - Centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center relative h-[300px] w-full mx-auto"
            >
              {/* Strategy Circle - Left */}
              <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-red-400 to-red-500 opacity-90 shadow-2xl top-1/2 -translate-y-1/2" style={{ left: 'calc(50% - 200px)' }}>
                <div className="absolute inset-0 flex items-center justify-center pr-10">
                  <span className="text-white font-bold text-xl font-playfair drop-shadow-lg">Strategy</span>
                </div>
              </div>
              
              {/* Technology Circle - Right */}
              <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-90 shadow-2xl top-1/2 -translate-y-1/2" style={{ left: 'calc(50% - 24px)' }}>
                <div className="absolute inset-0 flex items-center justify-center pl-10">
                  <span className="text-white font-bold text-xl font-playfair drop-shadow-lg">Technology</span>
                </div>
              </div>

              {/* Center Logo - In exact center of overlap */}
              <div className="absolute z-20 left-1/2 top-1/2 w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center p-2" style={{ transform: 'translate(-50%, -50%)' }}>
                <Image
                  src="/Paradigm Logo.png"
                  alt="Paradigm Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </motion.div>



            {/* Technical Services - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {technicalServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 justify-end group"
                >
                  <span className="text-blue-600 font-bold text-lg font-nunito text-right group-hover:text-blue-700 transition-colors">
                    {service}
                  </span>
                  <div className="w-8 h-1 bg-blue-600 group-hover:w-12 transition-all duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Previous Clients & Project Scopes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12 font-playfair">
            Previous Clients & <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Project Scopes</span>
          </h3>
          
          {/* Project Images Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-t-2xl p-4 text-center">
                <h4 className="text-2xl font-bold text-white font-playfair">Strategic Consulting</h4>
              </div>
              <div className="rounded-b-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/StratClients.png"
                  alt="Strategy Clients"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-t-2xl p-4 text-center">
                <h4 className="text-2xl font-bold text-white font-playfair">Technical Consulting</h4>
              </div>
              <div className="rounded-b-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/TechClients.png"
                  alt="Technical Clients"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services