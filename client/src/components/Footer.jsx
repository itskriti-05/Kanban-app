import React from 'react'
import { Link } from 'react-router-dom'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/itskriti-05' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kriti-goyal-692263302/?isSelfProfile=true' },
]

const SocialLink = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-sm text-gray-500 hover:text-purple-700 transition"
  >
    {label}
  </a>
)

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <Link to="/" className="flex items-center gap-1 shrink-0">
          <img src="/logo.png" alt="Taska logo" className="w-8 h-8 object-contain" />
          <span
            className="text-[16px] font-semibold text-[#1A1A2E]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Taska
          </span>
        </Link>

        <p className="text-sm text-gray-500">
          © 2026 Taska. Plan tasks, track progress, get more done.
        </p>

        <div className="flex items-center gap-5">
          <p className="text-sm text-gray-500">Built by Kriti Goyal</p>
          {SOCIAL_LINKS.map((s) => (
            <SocialLink key={s.label} {...s} />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer