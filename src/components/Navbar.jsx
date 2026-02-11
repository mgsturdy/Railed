import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Why Us', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Example Deal', href: '#example-deal' },
    { label: 'Compliance', href: '#compliance' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <Zap className="w-7 h-7 text-purple-light transition-colors group-hover:text-magenta" />
                <div className="absolute inset-0 blur-lg bg-purple-light/30 group-hover:bg-magenta/30 transition-colors" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Railed
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-light after:to-magenta after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#apply"
                className="glow-button relative z-10 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-deep to-purple-mid text-white text-sm font-semibold rounded-full hover:from-purple-mid hover:to-magenta transition-all duration-300 shadow-lg shadow-purple-deep/25"
              >
                <Zap className="w-4 h-4" />
                Apply Now
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 glass-strong md:hidden"
          >
            <div className="flex flex-col items-center gap-6 pt-12">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-gray-200 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-deep to-magenta text-white font-semibold rounded-full"
              >
                <Zap className="w-5 h-5" />
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky Apply button */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
          >
            <a
              href="#apply"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-purple-deep via-purple-mid to-magenta text-white font-bold rounded-2xl shadow-2xl shadow-purple-deep/40 animate-pulse-glow"
            >
              <Zap className="w-5 h-5" />
              Apply Now — No Credit Check
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
