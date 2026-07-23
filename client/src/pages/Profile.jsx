import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import toast, { Toaster } from 'react-hot-toast'
import { Pencil, Check, X } from 'lucide-react'

export default function Profile() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user?.name || '')

  const initial = user?.name?.charAt(0).toUpperCase() || '?'

  const handleSave = () => {
    // TODO: wire up to a PUT /api/auth/me (or similar) endpoint once it exists on the backend
    toast.success('Profile updated!')
    setIsEditing(false)
  }

  const handleCancel = () => {
    setName(user?.name || '')
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-[#f8f7ff]">
      <Toaster />
      <Sidebar />

      <div className="md:ml-[60px] px-6 md:px-10 py-8 pb-24 md:pb-8 max-w-2xl">
        <h1 className="text-2xl font-bold text-[#1a1a2e] mb-1">Profile</h1>
        <p className="text-sm text-gray-400 mb-8">Manage your account information</p>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

          {/* Avatar + name/email header */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
            <div className="w-16 h-16 rounded-full bg-purple-700 flex items-center justify-center shrink-0">
              <span className="text-white text-xl font-semibold">{initial}</span>
            </div>
            <div>
              <p className="text-lg font-semibold text-[#1a1a2e]">{user?.name}</p>
              <p className="text-sm text-gray-400">{user?.email}</p>
            </div>
          </div>

          {/* Editable fields */}
          <div className="flex flex-col gap-5">

            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#1a1a2e] outline-none focus:border-purple-400 transition"
                />
              ) : (
                <p className="text-sm text-[#1a1a2e] bg-gray-50 rounded-lg px-3 py-2.5">{user?.name}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 block">Email</label>
              <p className="text-sm text-gray-400 bg-gray-50 rounded-lg px-3 py-2.5">{user?.email}</p>
              <p className="text-xs text-gray-300 mt-1">Email cannot be changed</p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 mt-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-1.5 bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition"
                  >
                    <Check size={16} />
                    Save changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-1.5 border border-gray-200 text-sm text-gray-500 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-1.5 border border-gray-200 text-sm text-[#1a1a2e] px-4 py-2.5 rounded-lg hover:bg-gray-50 transition"
                >
                  <Pencil size={16} />
                  Edit name
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}