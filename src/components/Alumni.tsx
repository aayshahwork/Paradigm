'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Alumni = () => {
  return (
    <section className="min-h-screen section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-white font-playfair"
            >
              ALUMNI DESTINATIONS
            </motion.h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-md"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-md"></div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-3 font-playfair">100%</div>
                <div className="text-white text-sm uppercase tracking-wide font-nunito">Full-Time Job Placement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-blue-300 mb-3 font-playfair">$500M+</div>
                <div className="text-white text-sm uppercase tracking-wide font-nunito">Alumni-Founded Startups</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-3 font-playfair">200+</div>
                <div className="text-white text-sm uppercase tracking-wide font-nunito">Total Alumni</div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-lg text-gray-300 max-w-4xl mx-auto font-nunito mb-8"
            >
              With a <span className="font-bold text-white">100% full-time job placement rate</span>, our alumni have consistently secured roles at <span className="font-bold text-white">major companies in big tech, high finance, investment banking, and consulting</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center text-lg text-gray-300 max-w-4xl mx-auto font-nunito"
            >
              Our graduates have also been accepted into the most <span className="font-bold text-blue-400">prestigious Master's/PhD programs</span> in the world.
            </motion.p>
          </motion.div>

          {/* Alumni Image - Companies & Universities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative max-w-6xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
              <Image
                src="/Paradigm Alum.jpg"
                alt="Where Our Alumni Have Ended Up"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Alumni