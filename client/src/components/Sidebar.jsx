import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  LayoutDashboard,
  User,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout } = useAuth()
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const isActive = (path) => location.pathname === path
  const initial = user?.name?.charAt(0).toUpperCase() || '?'

  return (
    <>
      {/* ===== Desktop sidebar (unchanged) ===== */}
      <div className="hidden md:flex w-[60px] bg-white border-r border-gray-100 flex-col items-center py-4 gap-2 fixed h-full z-10">

        {/* Avatar */}
        <div
          onClick={() => navigate('/profile')}
          title={user?.name || 'Profile'}
          className="w-9 h-9 rounded-full bg-purple-700 flex items-center justify-center mb-4 cursor-pointer hover:bg-purple-800 transition"
        >
          <span className="text-white text-sm font-semibold">{initial}</span>
        </div>

        {/* Dashboard */}
        <button
          onClick={() => navigate('/dashboard')}
          className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
            isActive('/dashboard') ? 'bg-purple-50' : 'hover:bg-gray-50'
          }`}
          title="Dashboard"
        >
          <LayoutDashboard
            size={18}
            className={isActive('/dashboard') ? 'text-purple-700' : 'text-gray-400'}
          />
        </button>

        {/* Profile */}
        <button
          onClick={() => navigate('/profile')}
          className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
            isActive('/profile') ? 'bg-purple-50' : 'hover:bg-gray-50'
          }`}
          title="Profile"
        >
          <User
            size={18}
            className={isActive('/profile') ? 'text-purple-700' : 'text-gray-400'}
          />
        </button>

        <div className="flex-1" />

        {/* Logout */}
        <button
          onClick={() => setShowLogoutModal(true)}
          className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-red-50 transition group"
          title="Logout"
        >
          <LogOut size={18} className="text-gray-400 group-hover:text-red-500 transition" />
        </button>
      </div>

      {/* ===== Mobile bottom nav ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center justify-around py-2 z-20">

        {/* Avatar */}
        <button
          onClick={() => navigate('/profile')}
          className="flex flex-col items-center gap-1 px-3 py-1"
        >
          <div className="w-7 h-7 rounded-full bg-purple-700 flex items-center justify-center">
            <span className="text-white text-xs font-semibold">{initial}</span>
          </div>
          <span className="text-[10px] text-gray-400">You</span>
        </button>

        {/* Dashboard */}
        <button
          onClick={() => navigate('/dashboard')}
          className="flex flex-col items-center gap-1 px-3 py-1"
        >
          <LayoutDashboard
            size={20}
            className={isActive('/dashboard') ? 'text-purple-700' : 'text-gray-400'}
          />
          <span className={`text-[10px] ${isActive('/dashboard') ? 'text-purple-700 font-medium' : 'text-gray-400'}`}>
            Board
          </span>
        </button>

        {/* Profile */}
        <button
          onClick={() => navigate('/profile')}
          className="flex flex-col items-center gap-1 px-3 py-1"
        >
          <User
            size={20}
            className={isActive('/profile') ? 'text-purple-700' : 'text-gray-400'}
          />
          <span className={`text-[10px] ${isActive('/profile') ? 'text-purple-700 font-medium' : 'text-gray-400'}`}>
            Profile
          </span>
        </button>

        {/* Logout */}
        <button
          onClick={() => setShowLogoutModal(true)}
          className="flex flex-col items-center gap-1 px-3 py-1"
        >
          <LogOut size={20} className="text-gray-400" />
          <span className="text-[10px] text-gray-400">Logout</span>
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <h3 className="text-base font-semibold text-[#1a1a2e] mb-1">Log out?</h3>
            <p className="text-sm text-gray-400 mb-5">Are you sure you want to log out of Taskflow?</p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 border border-gray-200 text-sm text-gray-500 py-2 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 rounded-lg transition"
              >
                Yes, log out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}