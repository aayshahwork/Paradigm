'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Alumni = () => {
  return (
    <section className="min-h-screen section-padding bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 relative">
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
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 font-playfair mb-8"
            >
              Where Our Alumni Have Ended Up
            </motion.h2>
          </motion.div>

          {/* Alumni Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative max-w-6xl w-full">
              <Image
                src="/Paradigm Alum.jpg"
                alt="Where Our Alumni Have Ended Up"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-lg -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Alumni