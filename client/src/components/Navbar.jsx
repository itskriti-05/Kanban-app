import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
    {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">T</span>
          </div>
          <span className="text-[#1a1a2e] font-semibold text-base">Taskflow</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-[#1a1a2e] hover:bg-gray-50 transition">
            Log in
          </Link>
          <Link to="/register" className="px-4 py-2 rounded-lg bg-purple-700 text-white text-sm font-medium hover:bg-purple-800 transition">
            Sign up free
          </Link>
        </div>
      </nav>
   </>
  )
}

export default Navbar
