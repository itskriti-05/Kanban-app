import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from '../api/axios'
import toast, { Toaster } from 'react-hot-toast'
import Navbar from '../components/Navbar'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('/auth/register', form)
      login(res.data.user, res.data.token)
      toast.success('Account created!')
      navigate('/dashboard')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
  <>
    <Navbar />
    <div className="min-h-screen bg-[#f8f7ff] flex items-center justify-center px-4 py-6 md:py-0">
      <Toaster />

      <div className="flex flex-col md:flex-row w-full max-w-3xl rounded-2xl overflow-hidden shadow-sm border border-gray-100">

        {/* Left panel (Hidden on Mobile) */}
        <div className="hidden md:flex flex-1 bg-purple-50 p-10 flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-15">
              
             
            </div>

            <h2 className="text-lg font-semibold text-[#1a1a2e] mb-2 leading-snug">
              Start organizing
              <br />
              your work today.
            </h2>

            <p className="text-xs text-gray-500 leading-relaxed mb-8">
              Join Taskflow and manage your tasks the visual way.
            </p>

            <div className="flex flex-col gap-2">
              <div className="bg-pink-100 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                  <span className="text-xs font-medium text-[#4a4a6a]">
                    To Do
                  </span>
                </div>

                <div className="bg-white rounded-lg p-2 border border-pink-200">
                  <p className="text-xs text-[#1a1a2e] mb-1.5">
                    Design landing page
                  </p>

                  <div className="flex justify-between">
                    <span className="bg-red-100 text-red-800 text-[10px] px-2 py-0.5 rounded">
                      High
                    </span>

                    <span className="text-[10px] text-gray-400">
                      Apr 12
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-violet-100 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                  <span className="text-xs font-medium text-[#4a4a6a]">
                    Done
                  </span>
                </div>

                <div className="bg-white rounded-lg p-2 border border-violet-200">
                  <p className="text-xs text-[#1a1a2e] mb-1.5">
                    Setup project repo
                  </p>

                  <div className="flex justify-between">
                    <span className="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded">
                      Low
                    </span>

                    <span className="text-[10px] text-gray-400">
                      Apr 8
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-8">
            © 2025 Taskflow
          </p>
        </div>

        {/* Right panel */}
        <div className="w-full md:flex-[1.1] bg-white p-6 md:p-10">
          <h2 className="text-2xl md:text-xl font-semibold text-[#1a1a2e] mb-1">
            Create account
          </h2>

          <p className="text-sm text-gray-400 mb-7">
            Start managing your tasks today
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-500">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-sm text-[#1a1a2e] outline-none focus:border-purple-400 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-500">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-sm text-[#1a1a2e] outline-none focus:border-purple-400 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-500">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-sm text-[#1a1a2e] outline-none focus:border-purple-400 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium text-sm py-3 rounded-lg transition mt-1"
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>

            <div className="flex items-center gap-2 my-1">
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-xs text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-100"></div>
            </div>

            <Link
              to="/login"
              className="w-full border border-gray-200 text-sm text-[#1a1a2e] py-3 rounded-lg text-center hover:bg-gray-50 transition"
            >
              Already have an account? Log in
            </Link>
          </form>

          <p className="text-xs text-gray-400 text-center mt-6">
            By continuing you agree to our Terms of Service
          </p>
        </div>

      </div>
    </div>
  </>
);
}