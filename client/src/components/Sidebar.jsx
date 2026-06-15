import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { logout } = useAuth()
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const isActive = (path) => location.pathname === path

  return (
    <>
      <div className="w-[60px] bg-white border-r border-gray-100 flex flex-col items-center py-4 gap-2 fixed h-full z-10">

        {/* Logo */}
        <div
          onClick={() => navigate('/dashboard')}
          className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center mb-4 cursor-pointer"
        >
          <span className="text-white text-sm font-bold">T</span>
        </div>

        {/* Dashboard */}
        <button
          onClick={() => navigate('/dashboard')}
          className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
            isActive('/dashboard') ? 'bg-purple-50' : 'hover:bg-gray-50'
          }`}
          title="Dashboard"
        >
          <span className={isActive('/dashboard') ? 'text-purple-700' : 'text-gray-400'}>⊞</span>
        </button>

        {/* Profile */}
        <button
          onClick={() => navigate('/profile')}
          className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
            isActive('/profile') ? 'bg-purple-50' : 'hover:bg-gray-50'
          }`}
          title="Profile"
        >
          <span className={isActive('/profile') ? 'text-purple-700' : 'text-gray-400'}>👤</span>
        </button>

        <div className="flex-1" />

        {/* Logout */}
        <button
          onClick={() => setShowLogoutModal(true)}
          className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-red-50 transition"
          title="Logout"
        >
          <span className="text-gray-400">🚪</span>
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
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