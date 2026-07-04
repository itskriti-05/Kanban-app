import { useState } from 'react'


const PRIORITIES = ['Low', 'Medium', 'High']

const PRIORITY_STYLES = {
  Low: 'bg-green-100 text-green-700 border-green-200',
  Medium: 'bg-amber-100 text-amber-700 border-amber-200',
  High: 'bg-red-100 text-red-700 border-red-200',
}

export default function CardModal({ card, onSave, onClose, onDelete }) {
  const [title, setTitle] = useState(card?.title || '')
  const [description, setDescription] = useState(card?.description || '')
  const [priority, setPriority] = useState(card?.priority || 'Medium')
  const [dueDate, setDueDate] = useState(card?.dueDate ? card.dueDate.slice(0, 10) : '')
  const [progress, setProgress] = useState(card?.progress ?? 0)

  const isEditing = !!card

  const handleSave = () => {
    if (!title.trim()) return
    onSave({ title, description, priority, dueDate, progress: Number(progress) })
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-[#1a1a2e]">
            {isEditing ? 'Edit Card' : 'Add Card'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-gray-500 transition text-lg"
          >
            ✕
          </button>
        </div>

        {/* Title */}
        <div className="mb-3">
          <label className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1 block">Title</label>
          <input
            type="text"
            placeholder="Card title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-400 transition"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1 block">Description</label>
          <textarea
            placeholder="Optional description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={2}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-400 transition resize-none"
          />
        </div>

        {/* Priority */}
        <div className="mb-3">
          <label className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1 block">Priority</label>
          <div className="flex gap-2">
            {PRIORITIES.map(p => (
              <button
                key={p}
                onClick={() => setPriority(p)}
                className={`flex-1 text-xs py-1.5 rounded-lg border font-medium transition ${
                  priority === p
                    ? PRIORITY_STYLES[p]
                    : 'bg-gray-50 text-gray-400 border-gray-200 hover:border-gray-300'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Due Date */}
        <div className="mb-3">
          <label className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1 block">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-400 transition"
          />
        </div>

        {/* Progress */}
        <div className="mb-5">
          <label className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1 flex justify-between">
            <span>Progress</span>
            <span className="text-purple-600 font-semibold">{progress}%</span>
          </label>
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={e => setProgress(e.target.value)}
            className="w-full accent-purple-600"
          />
          <div className="w-full h-1 bg-gray-100 rounded-full mt-1">
            <div
              className="h-full bg-purple-600 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {isEditing && onDelete && (
            <button
              onClick={onDelete}
              className="px-3 py-2 text-xs text-red-400 border border-red-100 rounded-lg hover:bg-red-50 transition"
            >
              Delete
            </button>
          )}
          <button
            onClick={onClose}
            className="flex-1 border border-gray-200 text-sm text-gray-500 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!title.trim()}
            className="flex-1 bg-purple-700 hover:bg-purple-800 disabled:opacity-40 text-white text-sm font-medium py-2 rounded-lg transition"
          >
            {isEditing ? 'Save' : 'Add Card'}
          </button>
        </div>
      </div>
    </div>
  )
}