'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    if (pathname === '/contact') {
      window.location.href = '/'
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleAboutClick = () => {
    if (pathname === '/contact') {
      window.location.href = '/#about'
    } else {
      const element = document.getElementById('about')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleServicesClick = () => {
    if (pathname === '/contact') {
      window.location.href = '/#services'
    } else {
      const element = document.getElementById('services')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white'
      }`}
    >
      <div className="container-custom px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Paradigm Logo in top left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={scrollToTop}
          >
            <Image
              src="/Paradigm Logo.png"
              alt="Paradigm Consulting"
              width={160}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </motion.div>

          {/* Navigation Menu - simplified without CHALLENGE button */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleAboutClick}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm uppercase tracking-wide font-playfair"
            >
              ABOUT
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleServicesClick}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm uppercase tracking-wide font-playfair"
            >
              SERVICES
            </motion.button>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-sm font-medium text-sm uppercase tracking-wide transition-all duration-200 font-playfair"
            >
              CONTACT US
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation