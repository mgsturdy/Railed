import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, BarChart3, Banknote, Repeat } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Share Revenue & UA Data',
    description:
      "Send us 3–6 months of revenue history and your current UA performance — CPA, ROAS, channel mix. Quick, secure, confidential.",
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Get a Clear Offer',
    description:
      "We analyze your unit economics and send a straightforward offer — the capital amount, factor rate, and repayment percentage. No hidden terms.",
  },
  {
    number: '03',
    icon: Banknote,
    title: 'Deploy Capital',
    description:
      "Accept your terms and funding hits your account within days. Put it straight into the UA channels that are working.",
  },
  {
    number: '04',
    icon: Repeat,
    title: 'Repay as You Earn',
    description:
      "A fixed percentage of revenue goes toward repayment until the total is covered. Scale faster, pay it down faster. That's the whole model.",
  },
]

function StepCard({ step, index, isLast }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex gap-6"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-deep to-purple-mid shadow-lg shadow-purple-deep/30">
          <Icon className="w-6 h-6 text-white" />
        </div>
        {!isLast && (
          <div className="w-[2px] flex-1 my-2 bg-gradient-to-b from-purple-mid/40 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm font-mono text-purple-light/60">{step.number}</span>
          <h3 className="font-display text-xl font-semibold text-white">
            {step.title}
          </h3>
        </div>
        <p className="text-gray-400 leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-deep/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-deep/30 text-purple-light border border-purple-deep/50 mb-4">
              Four Steps to Funded UA
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              From application to{' '}
              <span className="gradient-text">capital deployed in days</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              No bank committees. No months of diligence. No explaining
              your industry to people who don't want to understand it.
              Just revenue, unit economics, and a clear offer.
            </p>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-green-400">Average timeline</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-white">2–5</span>
                <span className="text-gray-400">business days to funding</span>
              </div>
            </div>
          </motion.div>

          {/* Right steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
