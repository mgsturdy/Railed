import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Scale, FileCheck, Eye } from 'lucide-react'

const items = [
  {
    icon: Scale,
    text: 'We structure every deal as a purchase of future receivables (factoring), not a loan.',
  },
  {
    icon: FileCheck,
    text: 'In CA, UT, VA, and MA we include all required state disclosures.',
  },
  {
    icon: Eye,
    text: 'Transparent. Compliant. Creator-focused.',
  },
]

export default function Compliance() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="compliance" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Card */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-purple-deep/10 to-transparent rounded-3xl" />

            <div className="relative m-[1px] rounded-3xl glass-strong p-8 sm:p-12">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold">
                    Trust & Compliance
                  </h2>
                  <p className="text-sm text-gray-400">
                    Just because banks ignore you doesn't mean the rules don't matter to us
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-5">
                {items.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-400/10 flex items-center justify-center mt-0.5">
                        <Icon className="w-4 h-4 text-green-400" />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.text}</p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Bottom seal */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-green-400" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-purple-light/20 flex items-center justify-center">
                    <Scale className="w-3 h-3 text-purple-light" />
                  </div>
                </div>
                <span className="text-xs text-gray-500">
                  All funding agreements comply with applicable state and federal regulations
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
