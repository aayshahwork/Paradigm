'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail } from 'lucide-react'

const ContactPage = () => {
  const teamMembers = [
    {
      firstName: 'Om',
      fullName: 'Om Awate',
      email: 'omawate1@berkeley.edu',
      image: '/faces/om.avif'
    },
    {
      firstName: 'Sreekar',
      fullName: 'Sreekar Nagulapalli',
      email: 'sreekar_nagul@berkeley.edu',
      image: '/faces/sreekar.avif'
    },
    {
      firstName: 'Aadi',
      fullName: 'Aadi Agrawal',
      email: 'aadia12@berkeley.edu',
      image: '/faces/aadi.avif'
    },
    {
      firstName: 'Sashank',
      fullName: 'Sashank Gadisetti',
      email: 'sgadisetti@Berkeley.edu',
      image: '/faces/sashank.avif'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <Navigation />
      
      <section className="section-padding pt-32 pb-20 relative z-10">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white font-playfair">
              Contact <span className="text-blue-400">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with our team members
            </p>
          </motion.div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.firstName}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl"
              >
                {/* Profile photo with border */}
                <div className="w-36 h-36 mx-auto mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                      <Image
                        src={member.image}
                        alt={member.fullName}
                        fill
                        className="object-cover"
                        sizes="144px"
                      />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 font-playfair">
                  {member.fullName}
                </h3>
                
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-nunito group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="break-all">{member.email}</span>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Paradigm Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 max-w-2xl mx-auto shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-playfair">
                General Inquiries
              </h3>
              <a
                href="mailto:aezparadigm@gmail.com"
                className="inline-flex items-center justify-center gap-3 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg font-nunito group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>aezparadigm@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ContactPage

