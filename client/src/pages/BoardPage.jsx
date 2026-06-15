import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import toast, { Toaster } from 'react-hot-toast'
import Sidebar from '../components/Sidebar'

export default function BoardPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [board, setBoard] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBoard()
  }, [id])

  const fetchBoard = async () => {
    try {
      const res = await axios.get(`/boards/${id}`)
      setBoard(res.data)
    } catch {
      toast.error('Failed to load board')
      navigate('/dashboard')
    } finally {
      setLoading(false)
    }
  }

  const saveBoard = async (updatedBoard) => {
    try {
      const res = await axios.put(`/boards/${id}`, updatedBoard)
      setBoard(res.data)
    } catch {
      toast.error('Failed to save changes')
    }
  }

  const addColumn = async () => {
    const title = prompt('Column name:')
    if (!title?.trim()) return
    const updated = {
      ...board,
      columns: [...board.columns, { title, cards: [] }]
    }
    await saveBoard(updated)
    toast.success('Column added!')
  }

  const deleteColumn = async (colIndex) => {
    if (!window.confirm('Delete this column and all its cards?')) return
    const updated = {
      ...board,
      columns: board.columns.filter((_, i) => i !== colIndex)
    }
    await saveBoard(updated)
    toast.success('Column deleted!')
  }

  const addCard = async (colIndex, cardData) => {
    const updated = { ...board }
    updated.columns[colIndex].cards.push(cardData)
    await saveBoard(updated)
    toast.success('Card added!')
  }

  const updateCard = async (colIndex, cardIndex, cardData) => {
    const updated = { ...board }
    updated.columns[colIndex].cards[cardIndex] = cardData
    await saveBoard(updated)
    toast.success('Card updated!')
  }

  const deleteCard = async (colIndex, cardIndex) => {
    const updated = { ...board }
    updated.columns[colIndex].cards.splice(cardIndex, 1)
    await saveBoard(updated)
    toast.success('Card deleted!')
  }

  if (loading) return (
    <div className="flex min-h-screen bg-[#f8f7ff]">
      <Sidebar />
      <div className="ml-[60px] flex-1 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading board...</p>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-[#f8f7ff]">
      <Toaster />
      <Sidebar />

      <div className="ml-[60px] flex-1 flex flex-col">

        {/* Top bar */}
        <div className="bg-white border-b border-gray-100 px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span
              onClick={() => navigate('/dashboard')}
              className="text-xs text-gray-400 cursor-pointer hover:text-purple-700 transition"
            >
              My Boards
            </span>
            <span className="text-gray-300 text-xs">/</span>
            <span className="text-sm font-semibold text-[#1a1a2e]">{board?.title}</span>
          </div>
          <button
            onClick={addColumn}
            className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            + Add Column
          </button>
        </div>

        {/* Columns */}
        <div className="flex-1 flex gap-4 p-6 overflow-x-auto">
          {board?.columns.map((col, colIndex) => (
            <Column
              key={colIndex}
              column={col}
              colIndex={colIndex}
              onAddCard={(cardData) => addCard(colIndex, cardData)}
              onUpdateCard={(cardIndex, cardData) => updateCard(colIndex, cardIndex, cardData)}
              onDeleteCard={(cardIndex) => deleteCard(colIndex, cardIndex)}
              onDeleteColumn={() => deleteColumn(colIndex)}
            />
          ))}

          {/* Add column button */}
          <div
            onClick={addColumn}
            className="min-w-[260px] h-fit bg-white/60 border-2 border-dashed border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-purple-300 transition"
          >
            <span className="text-2xl text-gray-300">+</span>
            <span className="text-xs text-gray-400">Add column</span>
          </div>
        </div>
      </div>
    </div>
  )
}