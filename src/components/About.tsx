'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Clock, Award } from 'lucide-react'

const About = () => {
  return (
    <div>
      {/* About Paradigm Section - Redesigned */}
      <section id="about" className="section-padding bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.h2
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-playfair"
              >
                ABOUT PARADIGM
              </motion.h2>
              <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto font-nunito mb-6">
                Student-run consulting at UC Berkeley since <span className="font-bold text-blue-600">2003</span>
              </motion.p>
              <motion.p className="text-lg text-gray-600 max-w-4xl mx-auto font-nunito leading-relaxed">
                The premier student-run consulting organization at UC Berkeley, combining rigorous analytical frameworks with cutting-edge technological expertise to deliver exceptional strategic and technical consulting services.
              </motion.p>
            </motion.div>

            {/* Main Content Grid - Image + Stats */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 z-10"></div>
                  <Image
                    src="/aboutus.jpg"
                    alt="Paradigm Team"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating stat badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border-4 border-blue-500"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 font-playfair mb-1">4.91/5</div>
                    <div className="text-sm text-gray-600 font-nunito">Client Satisfaction</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Stats - Modern Circular Design */}
              <div className="grid grid-cols-2 gap-8">
                {/* Stat 1 - Acceptance */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative inline-block">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 group-hover:from-white/10 group-hover:to-white/30 transition-all"></div>
                      <div className="relative z-10">
                        <div className="text-5xl font-bold text-white font-playfair mb-1">&lt;10%</div>
                        <div className="text-xs text-blue-100 font-nunito uppercase tracking-wide">Acceptance</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Stat 2 - Members */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative inline-block">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 group-hover:from-white/10 group-hover:to-white/30 transition-all"></div>
                      <div className="relative z-10">
                        <div className="text-5xl font-bold text-white font-playfair mb-1">40+</div>
                        <div className="text-xs text-blue-100 font-nunito uppercase tracking-wide">Members</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Stat 3 - Projects */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative inline-block">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 group-hover:from-white/10 group-hover:to-white/30 transition-all"></div>
                      <div className="relative z-10">
                        <div className="text-5xl font-bold text-white font-playfair mb-1">35+</div>
                        <div className="text-xs text-blue-100 font-nunito uppercase tracking-wide">Projects</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Stat 4 - Placement */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative inline-block">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 group-hover:from-white/10 group-hover:to-white/30 transition-all"></div>
                      <div className="relative z-10">
                        <div className="text-5xl font-bold text-white font-playfair mb-1">100%</div>
                        <div className="text-xs text-blue-100 font-nunito uppercase tracking-wide">Placement</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Key Features - Horizontal Cards with Icons */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <Users className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-playfair">Multidisciplinary Team</h3>
                    <p className="text-gray-600 text-sm font-nunito">
                      Berkeley's brightest students from diverse majors including Business, Engineering, Computer Science, Economics, and more, bringing unique perspectives to every project.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <Clock className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-playfair">1,000+ Hours</h3>
                    <p className="text-gray-600 text-sm font-nunito">
                      Dedicated work per 10-12 week engagement, ensuring thorough research, comprehensive analysis, and actionable recommendations that drive real business impact.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <Award className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-playfair">Proven Results</h3>
                    <p className="text-gray-600 text-sm font-nunito">
                      4.91/5 client satisfaction rating and 200+ alumni network spanning top consulting firms, technology companies, and Fortune 500 organizations worldwide.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About