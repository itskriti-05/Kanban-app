import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section id="cta" className="scroll-mt-16 max-w-6xl mx-auto px-6 sm:px-8 py-16 md:py-24">
      <div className="bg-purple-700 rounded-3xl px-6 py-14 md:py-20 text-center shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to organize your work?
        </h2>
        <p className="text-sm sm:text-base text-purple-100 max-w-md mx-auto mb-8 leading-relaxed">
          Join Taska free and turn your to-do list into boards you actually enjoy using.
        </p>
        <Link
          to="/register"
          className="inline-block px-7 py-3 bg-white text-purple-700 text-sm font-medium rounded-xl hover:bg-purple-50 transition"
        >
          Get started →
        </Link>
        <p className="text-xs text-purple-200 mt-4">Plan it, track it, finish it. Start your first board today.</p>
      </div>
    </section>
  )
}

export default CTA