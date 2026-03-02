import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  PercentCircle,
  ShieldCheck,
  Rocket,
  Repeat,
  Target,
  Ban,
} from 'lucide-react'

const features = [
  {
    icon: Ban,
    title: "Built for Restricted Categories",
    description:
      "Cannabis, gambling, adult entertainment, alcohol, CBD, vaping — we specialize in the industries that banks and traditional lenders won't touch.",
    gradient: 'from-purple-light to-purple-mid',
  },
  {
    icon: Target,
    title: "Finance Your UA Spend Directly",
    description:
      "Paid social, programmatic, influencer, affiliate, SEO — get the capital to scale the acquisition channels that are actually working for you.",
    gradient: 'from-magenta to-magenta-light',
  },
  {
    icon: ShieldCheck,
    title: "Not a Loan. No Debt.",
    description:
      "We purchase a portion of your future receivables. It's factoring — no interest rates, no debt on your balance sheet, no usury concerns.",
    gradient: 'from-purple-deep to-purple-light',
  },
  {
    icon: PercentCircle,
    title: "Repay as a % of Revenue",
    description:
      "No fixed daily debits. You repay as a percentage of what you earn. Revenue up? Pay it down faster. Slow period? Payments flex down automatically.",
    gradient: 'from-purple-mid to-magenta',
  },
  {
    icon: Rocket,
    title: "Funded in Days, Not Quarters",
    description:
      "No bank committees. No months-long diligence. Share your revenue and UA data, get an offer fast, and have capital deployed within days.",
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
            Purpose-Built for Vice Industries
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your industry is legal.{' '}
            <br className="hidden sm:block" />
            Your growth capital{' '}
            <span className="gradient-text">shouldn't be impossible.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Banks won't lend to you. Ad platforms restrict you. Railed gives you
            the UA financing to scale — repaid as a percentage of your revenue.
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
