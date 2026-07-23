import { LayoutGrid, Trash2 } from 'lucide-react'

export default function BoardCard({ board, onClick, onDelete }) {

  const getColumnCount = (title) => {
    const col = board.columns?.find(c => c.title === title)
    return col ? col.cards.length : 0
  }

  const getTotalCards = () => {
    return board.columns?.reduce((acc, col) => acc + col.cards.length, 0) || 0
  }

  const getProgress = () => {
    const total = getTotalCards()
    if (total === 0) return 0
    return Math.round((getColumnCount('Done') / total) * 100)
  }

  const total = getTotalCards()
  const progress = getProgress()

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-3xl border border-gray-100 p-5 cursor-pointer hover:shadow-md transition"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="w-9 h-9 bg-purple-50 rounded-lg flex items-center justify-center">
          <LayoutGrid size={16} className="text-purple-700" />
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onDelete(board._id)
          }}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-300 hover:text-red-400 hover:bg-red-50 transition"
          title="Delete board"
        >
          <Trash2 size={14} />
        </button>
      </div>

      {/* Title */}
      <p className="text-sm font-semibold text-[#1a1a2e] mb-0.5">{board.title}</p>
      <p className="text-xs text-gray-400 mb-3">{total} tasks total</p>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-purple-50 rounded-full mb-1">
        <div
          className="h-full bg-purple-700 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mb-3">{progress}% complete</p>

      {/* Column counts */}
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center bg-pink-50 rounded-lg px-3 py-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
            <span className="text-xs text-gray-500">To Do</span>
          </div>
          <span className="text-xs font-semibold text-pink-500">{getColumnCount('To Do')}</span>
        </div>

        <div className="flex justify-between items-center bg-amber-50 rounded-lg px-3 py-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <span className="text-xs text-gray-500">In Progress</span>
          </div>
          <span className="text-xs font-semibold text-amber-500">{getColumnCount('In Progress')}</span>
        </div>

        <div className="flex justify-between items-center bg-violet-50 rounded-lg px-3 py-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-violet-400"></div>
            <span className="text-xs text-gray-500">Done</span>
          </div>
          <span className="text-xs font-semibold text-violet-500">{getColumnCount('Done')}</span>
        </div>
      </div>
    </div>
  )
}