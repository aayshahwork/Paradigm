'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/ParadigmHome.jpg"
          alt="Paradigm Home"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Gradient overlay for modern look */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/70 to-slate-800/80"></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-6xl mx-auto px-8">
          {/* Logo/Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center p-4">
              <Image
                src="/Paradigm Logo.png"
                alt="Paradigm Logo"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white font-playfair tracking-tight"
          >
            PARADIGM CONSULTING
          </motion.h1>

          {/* Subtitle with emphasis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-blue-200 font-light italic font-playfair mb-4">
              a branch of Alpha Epsilon Zeta
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-xs"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-xs"></div>
            </div>
          </motion.div>

          {/* Key stats - infographic style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 font-playfair">2003</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-nunito">Founded</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 font-playfair">35+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-nunito">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 font-playfair">&lt;10%</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-nunito">Acceptance Rate</div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto font-nunito"
          >
            The premier consulting organization at UC Berkeley, providing top-tier <span className="text-blue-400 font-semibold">strategic</span> and <span className="text-blue-400 font-semibold">technical</span> consulting services since 2003
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 font-playfair shadow-lg"
            >
              Discover More →
            </motion.button>
            <motion.a
              href="mailto:aezparadigm@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-blue-400 hover:text-white transition-all duration-300 font-playfair"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero