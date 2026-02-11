import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, TrendingUp, Percent, Clock, CheckCircle2, AlertCircle } from 'lucide-react'

const dealItems = [
  {
    icon: DollarSign,
    label: 'Advance Amount',
    value: '$40,000',
    sublabel: 'Cash upfront to grow your brand',
  },
  {
    icon: TrendingUp,
    label: 'Factor Rate',
    value: '1.35×',
    sublabel: 'Simple, transparent pricing',
  },
  {
    icon: DollarSign,
    label: 'Total to Repay',
    value: '$54,000',
    sublabel: 'All-in cost, no hidden fees',
  },
  {
    icon: Percent,
    label: 'Revenue Share',
    value: '13%',
    sublabel: 'Of your creator revenue',
  },
  {
    icon: Clock,
    label: 'Estimated Payoff',
    value: '~6 months',
    sublabel: 'No hard end date',
  },
]

export default function ExampleDeal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="example-deal" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-magenta/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-magenta/10 text-magenta-light border border-magenta/20 mb-4">
            Transparent Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            See a{' '}
            <span className="gradient-text">real example deal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No confusing terms. Here's exactly what a typical deal looks like.
          </p>
        </motion.div>

        {/* Deal card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-light/20 via-magenta/20 to-purple-deep/20 rounded-3xl" />

            <div className="relative m-[1px] rounded-3xl bg-dark-card p-6 sm:p-10">
              {/* Top label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-light to-magenta flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">Sample Creator Deal</h3>
                  <p className="text-sm text-gray-500">Based on $8K–10K/month creator revenue</p>
                </div>
              </div>

              {/* Deal metrics grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {dealItems.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                      className="glass rounded-2xl p-5 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-4 h-4 text-purple-light" />
                        <span className="text-sm text-gray-400">{item.label}</span>
                      </div>
                      <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                        {item.value}
                      </div>
                      <p className="text-xs text-gray-500">{item.sublabel}</p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Key highlight */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-deep/20 to-magenta/10 border border-purple-deep/30">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white mb-1">
                    100% percentage-based — no fixed daily amount
                  </p>
                  <p className="text-sm text-gray-400">
                    Earn more → pay faster. Slow month → payments flex down automatically.
                    No penalties, no stress. Your success is our success.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-3 mt-6 text-xs text-gray-500">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>
                  This is a sample illustration only. Actual terms depend on your revenue
                  history, volume, and state of residence. All deals are subject to approval.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
