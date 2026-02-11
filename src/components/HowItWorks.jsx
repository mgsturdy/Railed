import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, BarChart3, Banknote, Repeat } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Statements',
    description:
      'Share your recent platform payout history (3–6 months). Quick, secure, and confidential.',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'We Analyze & Send an Offer',
    description:
      'Our team reviews your earnings and sends you a clear, transparent offer — no hidden fees, no surprises.',
  },
  {
    number: '03',
    icon: Banknote,
    title: 'Accept & Get Funded',
    description:
      'Sign off on your terms and receive your capital — usually within days, straight to your account.',
  },
  {
    number: '04',
    icon: Repeat,
    title: 'Repay as You Earn',
    description:
      "We take an agreed percentage of your platform deposits until the total payback is complete. That's it.",
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
              Simple 4-Step Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              From application to{' '}
              <span className="gradient-text">funded in days</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              No lengthy paperwork. No credit bureaus. Just your platform
              earnings history and a straightforward process.
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
