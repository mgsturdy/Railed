import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, ArrowRight, Sparkles } from 'lucide-react'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="apply" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-deep/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-magenta/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-light via-magenta to-purple-light bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] rounded-3xl" />

            <div className="relative m-[1px] rounded-3xl bg-dark-card p-10 sm:p-16">
              {/* Sparkle */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-light to-magenta mb-8 shadow-lg shadow-purple-deep/30"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Ready to unlock your{' '}
                <span className="gradient-text">next level</span>?
              </h2>

              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Apply in minutes — get an offer based on your actual earnings.
                No credit checks, no banks, no BS.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:apply@railed.com"
                  className="glow-button relative z-10 group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-deep via-purple-mid to-magenta text-white font-bold text-lg rounded-full shadow-2xl shadow-purple-deep/40 hover:shadow-magenta/40 transition-all duration-300 hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Application
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                Takes less than 5 minutes • No commitment required • Offer within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
