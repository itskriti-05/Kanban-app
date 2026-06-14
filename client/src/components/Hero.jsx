import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-8 py-20 flex items-start gap-16">

        {/* Left */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-3 py-1 mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-700"></div>
            <span className="text-xs text-purple-700 font-medium">Free to use · No credit card needed</span>
          </div>

          <h1 className="text-5xl font-bold text-[#1a1a2e] leading-tight mb-7">
            Manage tasks the <br />
            <span className="text-purple-700">visual way</span>
          </h1>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm">
            Organize your work with beautiful Kanban boards. Drag, drop, and get things done — solo or with your team.
          </p>

          <div className="flex items-center gap-3">
            <Link to="/register" className="px-7 py-3 bg-purple-700 text-white text-sm font-medium rounded-lg hover:bg-purple-800 transition">
              Get started free →
            </Link>
            <Link to="/login" className="px-6 py-3 border border-gray-200 bg-white text-sm text-[#1a1a2e] rounded-lg hover:bg-gray-50 transition">
              Log in
            </Link>
          </div>
        </div>

        {/* Right — Board Preview */}
        <div className="flex-1 flex flex-col gap-3 mt-6">

          {/* Board header */}
          <div className="bg-white rounded-xl border border-gray-100 p-4 flex justify-between items-center shadow-sm">
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
          <div className="flex gap-2">

            {/* To Do */}
            <div className="flex-1 bg-pink-100 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                  <span className="text-xs font-medium text-[#4a4a6a]">To Do</span>
                </div>
                <span className="text-xs text-gray-400">2</span>
              </div>
              <div className="bg-white rounded-lg p-2.5 border border-pink-200">
                <p className="text-xs font-medium text-[#1a1a2e] mb-1.5">Design homepage</p>
                <div className="flex justify-between items-center">
                  <span className="bg-red-100 text-red-800 text-[10px] px-2 py-0.5 rounded">High</span>
                  <span className="text-[10px] text-gray-400">Apr 12</span>
                </div>
              </div>
            </div>

            {/* In Progress */}
            <div className="flex-1 bg-amber-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <span className="text-xs font-medium text-[#4a4a6a]">In Progress</span>
                </div>
                <span className="text-xs text-gray-400">1</span>
              </div>
              <div className="bg-white rounded-lg p-2.5 border border-amber-200">
                <p className="text-xs font-medium text-[#1a1a2e] mb-1.5">Build auth system</p>
                <div className="flex justify-between items-center">
                  <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded">Medium</span>
                  <span className="text-[10px] text-gray-400">Apr 15</span>
                </div>
              </div>
            </div>

            {/* Done */}
            <div className="flex-1 bg-violet-100 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-xs font-medium text-[#4a4a6a]">Done</span>
                </div>
                <span className="text-xs text-gray-400">3</span>
              </div>
              <div className="bg-white rounded-lg p-2.5 border border-purple-200">
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