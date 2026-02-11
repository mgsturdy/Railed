import { motion } from 'framer-motion'
import { Zap, ArrowRight, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-deep/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-magenta/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-mid/5 rounded-full blur-[150px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Simulated dashboard background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-[0.06] rounded-3xl overflow-hidden">
          <svg viewBox="0 0 900 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Revenue chart line */}
            <path
              d="M0 400 Q100 380 200 350 Q300 300 400 250 Q500 180 600 150 Q700 100 800 60 L900 30"
              stroke="url(#grad1)"
              strokeWidth="3"
              fill="none"
            />
            {/* Area under curve */}
            <path
              d="M0 400 Q100 380 200 350 Q300 300 400 250 Q500 180 600 150 Q700 100 800 60 L900 30 L900 500 L0 500 Z"
              fill="url(#grad2)"
            />
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="900" y2="0">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
              <linearGradient id="grad2" x1="450" y1="0" x2="450" y2="500">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">
              Like DoorDash Capital, but made for OnlyFans
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Fast Capital for{' '}
            <br className="hidden sm:block" />
            OnlyFans Creators{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">—&nbsp;No Loans, No Fixed&nbsp;Payments</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Get funded in days. Repay only a percentage of your future earnings.
            Built for creators who scale fast.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#apply"
              className="glow-button relative z-10 group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-deep via-purple-mid to-magenta text-white font-bold text-lg rounded-full shadow-2xl shadow-purple-deep/30 hover:shadow-magenta/30 transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              Apply Now — No Credit Check
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-4 text-gray-300 hover:text-white font-medium transition-colors"
            >
              See how it works
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>No personal credit check</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>Revenue-based repayment</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>Funded in days</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  )
}
