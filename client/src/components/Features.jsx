import React from 'react'

const FEATURES = [
  {
    icon: '▦',
    title: 'Visual boards',
    desc: 'See every task at a glance. Drag work across columns and watch your project move.',
    iconBg: 'bg-purple-100 text-purple-700',
  },
  {
    icon: '↗',
    title: 'Progress tracking',
    desc: 'Live progress bars show exactly how far along each board is, with no guesswork.',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    icon: '⚑',
    title: 'Priorities & tags',
    desc: 'Mark tasks high, medium, or low and sort by due dates so nothing slips.',
    iconBg: 'bg-pink-100 text-pink-600',
  },
]

const FeatureCard = ({ icon, title, desc, iconBg }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm card-hover">
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-5 ${iconBg}`}>
      {icon}
    </div>
    <h3 className="text-base font-semibold text-[#1a1a2e] mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
)

const Features = () => {
  return (
    <section id="features" className="scroll-mt-16 max-w-6xl mx-auto px-6 sm:px-8 py-16 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-3 py-1 mb-5">
          <span className="text-xs text-purple-700 font-medium">✦ Why Taska</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
          Everything you need to <span className="text-purple-700">get things done</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Simple tools that keep your work organized, visible, and moving forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}

export default Features