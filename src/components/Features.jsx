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
    icon: CreditCard,
      title: "Banks Don't Get Creator Income",
    description:
      "Irregular deposits, platform payouts, multiple revenue streams — banks see risk. We see a thriving business. Your earnings are your credit.",
    gradient: 'from-purple-light to-purple-mid',
  },
  {
    icon: PercentCircle,
      title: "No Fixed Payments. Ever.",
    description:
      "You repay as a percentage of what you earn. Big month? You pay more. Slow month? It flexes down. Zero fixed daily debits draining your account.",
    gradient: 'from-magenta to-magenta-light',
  },
  {
    icon: ShieldCheck,
    title: "It's Not a Loan",
    description:
      "We purchase a portion of your future receivables. It's called factoring — no interest rates, no debt on your record, no usury concerns.",
    gradient: 'from-purple-deep to-purple-light',
  },
  {
    icon: Rocket,
    title: 'Funded in Days, Not Weeks',
    description:
      "No bank committees. No 30-day review cycles. Share your payout history, get an offer fast, and have capital in your account within days.",
    gradient: 'from-purple-mid to-magenta',
  },
  {
    icon: Repeat,
    title: 'Every Platform. Every Revenue Stream.',
    description:
      "Subscriptions, PPV, tips, customs, referrals — we count it all, across every major creator platform. More revenue recognized means a bigger advance.",
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
            Built for Creators Banks Ignore
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The banking system is broken{' '}
            <br className="hidden sm:block" />
            for creators.{' '}
            <span className="gradient-text">We fixed it.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            You earn real money. You deserve real financial tools.
            Railed gives you advances against your actual revenue — across every platform.
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
