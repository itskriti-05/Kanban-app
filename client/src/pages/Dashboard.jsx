import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from '../api/axios'
import toast, { Toaster } from 'react-hot-toast'
import Sidebar from '../components/Sidebar'
import BoardCard from '../components/BoardCard'

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [boards, setBoards] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [newBoardTitle, setNewBoardTitle] = useState('')

  useEffect(() => {
    fetchBoards()
  }, [])

  const fetchBoards = async () => {
    try {
      const res = await axios.get('/boards')
      setBoards(res.data)
    } catch {
      toast.error('Failed to load boards')
    } finally {
      setLoading(false)
    }
  }

  const createBoard = async () => {
    if (!newBoardTitle.trim()) return
    try {
      const res = await axios.post('/boards', { title: newBoardTitle })
      setBoards([...boards, res.data])
      setNewBoardTitle('')
      setShowModal(false)
      toast.success('Board created!')
    } catch {
      toast.error('Failed to create board')
    }
  }

  const deleteBoard = async (id) => {
    try {
      await axios.delete(`/boards/${id}`)
      setBoards(boards.filter(b => b._id !== id))
      toast.success('Board deleted!')
    } catch {
      toast.error('Failed to delete board')
    }
  }

  return (
    <div className="flex min-h-screen bg-[#f8f7ff]">
      <Toaster />
      <Sidebar />

      {/* Main content */}
      <div className="ml-[60px] flex-1 p-8">

       {/* Top bar */}
<div className="flex justify-between items-center mb-8">
  <div>
    <h1 className="text-lg font-semibold text-[#1a1a2e]">My Boards</h1>
    <p className="text-xs text-gray-400 mt-0.5">Welcome back, {user?.name} 👋</p>
  </div>

  <div className="flex items-center gap-3">
    {/* Stats */}
    <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm">
      <div className="text-center">
        <p className="text-sm font-bold text-[#1a1a2e]">{boards.length}</p>
        <p className="text-[10px] text-gray-400">Boards</p>
      </div>
      <div className="w-px h-5 bg-gray-100"></div>
      <div className="text-center">
        <p className="text-sm font-bold text-[#1a1a2e]">
          {boards.reduce((acc, b) => acc + (b.columns?.reduce((a, c) => a + c.cards.length, 0) || 0), 0)}
        </p>
        <p className="text-[10px] text-gray-400">Tasks</p>
      </div>
      <div className="w-px h-5 bg-gray-100"></div>
      <div className="text-center">
        <p className="text-sm font-bold text-violet-500">
          {boards.reduce((acc, b) => {
            const done = b.columns?.find(c => c.title === 'Done')?.cards.length || 0
            return acc + done
          }, 0)}
        </p>
        <p className="text-[10px] text-gray-400">Done</p>
      </div>
    </div>

    <button
      onClick={() => setShowModal(true)}
      className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium px-4 py-3 rounded-xl transition shadow-sm"
    >
      + New Board
    </button>
  </div>
</div>

        {/* Boards grid */}
        {loading ? (
          <p className="text-gray-400 text-sm">Loading boards...</p>
        ) : boards.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-24 gap-3">
            <p className="text-gray-400 text-sm">No boards yet</p>
            <button
              onClick={() => setShowModal(true)}
              className="text-purple-700 text-sm font-medium hover:underline"
            >
              Create your first board →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {boards.map(board => (
              <BoardCard
                key={board._id}
                board={board}
                onClick={() => navigate(`/board/${board._id}`)}
                onDelete={deleteBoard}
              />
            ))}

            {/* Create new board card */}
            <div
              onClick={() => setShowModal(true)}
              className="bg-white rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 min-h-[180px] cursor-pointer hover:border-purple-300 transition"
            >
              <div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xl">+</span>
              </div>
              <span className="text-xs text-gray-400">Create new board</span>
            </div>
          </div>
        )}
      </div>

      {/* New Board Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <h3 className="text-base font-semibold text-[#1a1a2e] mb-4">Create new board</h3>
            <input
              type="text"
              placeholder="Board title"
              value={newBoardTitle}
              onChange={e => setNewBoardTitle(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && createBoard()}
              autoFocus
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-purple-400 transition mb-4"
            />
            <div className="flex gap-2">
              <button
                onClick={() => { setShowModal(false); setNewBoardTitle('') }}
                className="flex-1 border border-gray-200 text-sm text-gray-500 py-2 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={createBoard}
                className="flex-1 bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium py-2 rounded-lg transition"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}