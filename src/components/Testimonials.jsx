import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "I make six figures a year and couldn't get a $5K credit card. Railed looked at my actual earnings and funded me in four days. That's how it should work.",
    name: 'Jade M.',
    handle: '@jadecreates',
    avatar: 'JM',
    revenue: '$12K/mo across platforms',
    gradient: 'from-purple-light to-magenta',
  },
  {
    quote: "No credit check, no explaining what I do to a loan officer, no BS. Just my payout history and a clear offer. Reinvested everything into better content.",
    name: 'Marcus T.',
    handle: '@marcustopx',
    avatar: 'MT',
    revenue: '$8K/mo across platforms',
    gradient: 'from-magenta to-magenta-light',
  },
  {
    quote: "The percentage-based repayment is what sold me. Slow month, payments drop. Good month, I pay it off faster. Finally someone who gets how this income works.",
    name: 'Ava R.',
    handle: '@avarealones',
    avatar: 'AR',
    revenue: '$22K/mo across platforms',
    gradient: 'from-purple-deep to-purple-light',
  },
]

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative h-full p-6 sm:p-8 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-500">
        {/* Quote icon */}
        <Quote className="w-8 h-8 text-purple-deep/40 mb-4" />

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-sm font-bold text-white`}>
            {testimonial.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white text-sm">{testimonial.name}</span>
              <span className="text-xs text-gray-500">{testimonial.handle}</span>
            </div>
            <span className="text-xs text-purple-light">{testimonial.revenue}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section className="relative py-24 sm:py-32">
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
            From Creators Who've Been There
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The banks said no.{' '}
            <span className="gradient-text">We said let's go.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real creators who were tired of being ignored by traditional finance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.handle} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
