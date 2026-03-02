import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Every bank we talked to said no the second they heard 'cannabis.' Railed looked at our revenue, our ROAS, and funded our UA in under a week. We 3x'd paid acquisition that quarter.",
    name: 'Derek L.',
    handle: 'CBD / Cannabis Brand',
    avatar: 'DL',
    revenue: '$400K/mo revenue',
    gradient: 'from-purple-light to-magenta',
  },
  {
    quote: "We had profitable unit economics and no one would finance our growth. Railed understood the model instantly. Revenue-based repayment means we never stress about a slow month.",
    name: 'Samira K.',
    handle: 'iGaming Operator',
    avatar: 'SK',
    revenue: '$1.2M/mo revenue',
    gradient: 'from-magenta to-magenta-light',
  },
  {
    quote: "Traditional lenders wanted personal guarantees and wouldn't touch our industry. Railed gave us $200K for UA based purely on our revenue history. Paid it back in four months.",
    name: 'James R.',
    handle: 'Adult Entertainment Platform',
    avatar: 'JR',
    revenue: '$600K/mo revenue',
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
            From Operators Who've Been There
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The banks said no.{' '}
            <span className="gradient-text">We funded their growth.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Vice industry operators who scaled UA with Railed capital.
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
