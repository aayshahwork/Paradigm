'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom py-12 px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-8 max-w-4xl mx-auto">
          {/* Company Info & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white font-playfair">P</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-playfair">Paradigm Consulting</h3>
                <p className="text-sm text-blue-200">Alpha Epsilon Zeta • UC Berkeley</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <a
                href="mailto:aezparadigm@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/30 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-nunito text-sm">aezparadigm@gmail.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=UC+Berkeley"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/30 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-nunito text-sm">Berkeley, California</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-blue-400 mb-1 font-playfair">2003</div>
              <div className="text-xs text-gray-400 font-nunito uppercase">Founded</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-blue-400 mb-1 font-playfair">35+</div>
              <div className="text-xs text-gray-400 font-nunito uppercase">Projects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-blue-400 mb-1 font-playfair">&lt;10%</div>
              <div className="text-xs text-gray-400 font-nunito uppercase">Acceptance</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl font-bold text-blue-400 mb-1 font-playfair">100%</div>
              <div className="text-xs text-gray-400 font-nunito uppercase">Placement</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-400 text-xs font-nunito text-center md:text-left">
            © 2025 Paradigm Consulting. All rights reserved.
          </div>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-200 shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer