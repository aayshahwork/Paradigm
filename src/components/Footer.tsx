'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowUp } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/Paradigm Logo.png"
              alt="Paradigm Consulting"
              width={150}
              height={50}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              UC Berkeley's premier student consulting organization, delivering innovative solutions since 2003.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:aezparadigm@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                aezparadigm@gmail.com
              </a>
              <a
                href="https://maps.google.com/?q=UC+Berkeley"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <MapPin className="w-4 h-4" />
                UC Berkeley Campus, CA
              </a>
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Strategy Projects</li>
              <li>Technical Consulting</li>
              <li>Business Advisory</li>
              <li>Market Analysis</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Paradigm Consulting. All rights reserved.
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
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