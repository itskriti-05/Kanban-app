import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from '../api/axios'
import toast, { Toaster } from 'react-hot-toast'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('/auth/login', form)
      login(res.data.user, res.data.token)
      toast.success('Welcome back!')
      navigate('/dashboard')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f7ff] flex items-center justify-center px-4">
      <Toaster />

      <div className="flex w-full max-w-3xl rounded-2xl overflow-hidden shadow-sm border border-gray-100">

        {/* Left panel */}
        <div className="flex-1 bg-purple-50 p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">T</span>
              </div>
              <span className="text-[#1a1a2e] font-semibold">Taskflow</span>
            </div>

            <h2 className="text-lg font-semibold text-[#1a1a2e] mb-2 leading-snug">
              Organize your work,<br />visually.
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-8">
              Drag, drop and manage tasks across beautiful boards.
            </p>

            {/* Mini board preview */}
            <div className="flex flex-col gap-2">
              <div className="bg-pink-100 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                  <span className="text-xs font-medium text-[#4a4a6a]">To Do</span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-pink-200">
                  <p className="text-xs text-[#1a1a2e] mb-1.5">Design landing page</p>
                  <div className="flex justify-between">
                    <span className="bg-red-100 text-red-800 text-[10px] px-2 py-0.5 rounded">High</span>
                    <span className="text-[10px] text-gray-400">Apr 12</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <span className="text-xs font-medium text-[#4a4a6a]">In Progress</span>
                </div>
                <div className="bg-white rounded-lg p-2 border border-amber-200">
                  <p className="text-xs text-[#1a1a2e] mb-1.5">Build auth system</p>
                  <div className="flex justify-between">
                    <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded">Medium</span>
                    <span className="text-[10px] text-gray-400">Apr 15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-8">© 2025 Taskflow</p>
        </div>

        {/* Right panel */}
        <div className="flex-[1.1] bg-white p-10">
          <h2 className="text-xl font-semibold text-[#1a1a2e] mb-1">Welcome back</h2>
          <p className="text-sm text-gray-400 mb-7">Log in to your workspace</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-500">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#1a1a2e] outline-none focus:border-purple-400 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-500">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                required
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#1a1a2e] outline-none focus:border-purple-400 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium text-sm py-2.5 rounded-lg transition mt-1"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>

            <div className="flex items-center gap-2 my-1">
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-xs text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-100"></div>
            </div>

            <Link
              to="/register"
              className="border border-gray-200 text-sm text-[#1a1a2e] py-2.5 rounded-lg text-center hover:bg-gray-50 transition"
            >
              Create an account
            </Link>
          </form>

          <p className="text-xs text-gray-400 text-center mt-6">
            By continuing you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  )
}