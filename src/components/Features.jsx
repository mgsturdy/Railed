import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  PercentCircle,
  ShieldCheck,
  Rocket,
  Repeat,
  CreditCard,
} from 'lucide-react'

const features = [
  {
    icon: PercentCircle,
    title: 'No Fixed Daily Payments',
    description:
      'Pure revenue percentage. You pay more when you earn more, less when you earn less. Zero fixed daily debits draining your account.',
    gradient: 'from-purple-light to-purple-mid',
  },
  {
    icon: ShieldCheck,
    title: 'True Factoring — Not a Loan',
    description:
      'We purchase a portion of your future receivables. This is factoring, not lending — structured to avoid usury laws and protect you.',
    gradient: 'from-magenta to-magenta-light',
  },
  {
    icon: Rocket,
    title: 'Fast Approval & Funding',
    description:
      'Submit your OnlyFans payout history and get an offer fast. No lengthy bank processes. Funded in days, not weeks.',
    gradient: 'from-purple-deep to-purple-light',
  },
  {
    icon: Repeat,
    title: 'Flexible & No Penalties',
    description:
      'Pay faster when you earn more — no prepayment penalties. Slow month? Your payments flex down automatically.',
    gradient: 'from-purple-mid to-magenta',
  },
  {
    icon: CreditCard,
    title: 'Creator-First Revenue Coverage',
    description:
      'We understand OnlyFans: subscriptions, PPV, tips, referrals — all counted toward your earnings for maximum funding.',
    gradient: 'from-magenta-light to-purple-light',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full p-6 sm:p-8 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
        {/* Hover glow */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} mb-5`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="font-display text-lg sm:text-xl font-semibold mb-3 text-white group-hover:text-purple-light transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-deep/30 text-purple-light border border-purple-deep/50 mb-4">
            Why Creators Choose Railed
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Capital that{' '}
            <span className="gradient-text">works like you do</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No fixed payments. No credit checks. Just fast, flexible funding that
            scales with your OnlyFans revenue.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
