import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease-out both; }
        .fade-up-delay-1 { animation: fadeUp 0.6s ease-out 0.1s both; }
        .fade-up-delay-2 { animation: fadeUp 0.6s ease-out 0.2s both; }
        .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 20px -6px rgba(0,0,0,0.12); }
      `}</style>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

        {/* Left */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-3 py-1 mb-6 fade-up">
            <div className="w-2 h-2 rounded-full bg-purple-700"></div>
            <span className="text-xs text-purple-700 font-medium">Free to use </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight mb-7 fade-up-delay-1">
            Manage tasks the <br className="hidden sm:block" />
            <span className="text-purple-700">visual way</span>
          </h1>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm mx-auto md:mx-0 fade-up-delay-1">
  Stay on top of your work with clear, organized boards. Plan your tasks, track progress, and get more done — every day.
</p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 fade-up-delay-2">
            <Link to="/register" className="w-full sm:w-auto text-center px-7 py-3 bg-purple-700 text-white text-sm font-medium rounded-lg hover:bg-purple-800 transition">
              Get started →
            </Link>
            <Link to="/login" className="w-full sm:w-auto text-center px-6 py-3 border border-gray-200 bg-white text-sm text-[#1a1a2e] rounded-lg hover:bg-gray-50 transition">
              Log in
            </Link>
          </div>
        </div>

        {/* Right — Board Preview */}
        
<div className="flex-1 w-full flex flex-col gap-3 md:mt-6 fade-up-delay-2">

  {/* Board header */}
  <div className="bg-white rounded-xl border border-gray-100 p-4 flex justify-between items-center shadow-sm card-hover">
    <div>
      <p className="text-sm font-semibold text-[#1a1a2e]">Website Redesign</p>
      <p className="text-xs text-gray-400 mt-0.5">6 of 10 tasks completed</p>
    </div>
    <div className="w-24">
      <div className="w-full h-1.5 bg-purple-100 rounded-full">
        <div className="w-3/5 h-full bg-purple-700 rounded-full"></div>
      </div>
      <p className="text-xs text-gray-400 mt-1 text-right">60%</p>
    </div>
  </div>

  {/* Columns */}
  <div className="flex flex-col sm:flex-row gap-2">

    {/* To Do */}
    <div className="flex-1 bg-pink-100 rounded-xl p-2.5 sm:p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
          <span className="text-xs font-medium text-[#4a4a6a]">To Do</span>
        </div>
        <span className="text-xs text-gray-400">2</span>
      </div>
      <div className="bg-white rounded-lg p-2.5 border border-pink-200 card-hover">
        <p className="text-xs font-medium text-[#1a1a2e] mb-1.5">Design homepage</p>
        <div className="flex justify-between items-center">
          <span className="bg-red-100 text-red-800 text-[10px] px-2 py-0.5 rounded">High</span>
          <span className="text-[10px] text-gray-400">Apr 12</span>
        </div>
      </div>
    </div>

    {/* In Progress */}
    <div className="flex-1 bg-amber-50 rounded-xl p-2.5 sm:p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <span className="text-xs font-medium text-[#4a4a6a]">In Progress</span>
        </div>
        <span className="text-xs text-gray-400">1</span>
      </div>
      <div className="bg-white rounded-lg p-2.5 border border-amber-200 card-hover">
        <p className="text-xs font-medium text-[#1a1a2e] mb-1.5">Build auth system</p>
        <div className="flex justify-between items-center">
          <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded">Medium</span>
          <span className="text-[10px] text-gray-400">Apr 15</span>
        </div>
      </div>
    </div>

    {/* Done */}
    <div className="flex-1 bg-violet-100 rounded-xl p-2.5 sm:p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
          <span className="text-xs font-medium text-[#4a4a6a]">Done</span>
        </div>
        <span className="text-xs text-gray-400">3</span>
      </div>
      <div className="bg-white rounded-lg p-2.5 border border-purple-200 card-hover">
        <p className="text-xs font-medium text-[#1a1a2e] mb-1.5">Setup project repo</p>
        <div className="flex justify-between items-center">
          <span className="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded">Low</span>
          <span className="text-[10px] text-gray-400">Apr 8</span>
        </div>
      </div>
    </div>

  </div>
</div>
      </div>
    </>
  )
}

export default Hero