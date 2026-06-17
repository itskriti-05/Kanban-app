import React from 'react'

const PRIORITY_STYLES = {
  High: 'bg-red-100 text-red-500',
  Medium: 'bg-amber-100 text-amber-600',
  Low: 'bg-green-100 text-green-600',
}

const CardItem = ({ card, borderColor, onClick, onDelete }) => {
  const isOverdue = card.dueDate && new Date(card.dueDate) < new Date()

  return (
    <div
      onClick={onClick}
      className={`group bg-white rounded-2xl p-4 border ${borderColor} cursor-pointer hover:shadow-md transition-shadow`}
    >
      {/* Priority badge */}
      {card.priority && (
        <span className={`text-xs font-medium px-2.5 py-1 rounded-lg inline-block mb-3 ${PRIORITY_STYLES[card.priority] || 'bg-gray-100 text-gray-500'}`}>
          {card.priority}
        </span>
      )}

      {/* Title */}
      <p className="text-sm font-bold text-[#1a1a2e] mb-1 leading-snug">{card.title}</p>

      {/* Description */}
      {card.description && (
        <p className="text-xs text-gray-400 mb-3 line-clamp-2 leading-relaxed">{card.description}</p>
      )}

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-100 rounded-full mb-3">
        <div
          className="h-full bg-purple-500 rounded-full transition-all"
          style={{ width: `${card.progress || 0}%` }}
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        {card.dueDate ? (
          <span className={`text-xs ${isOverdue ? 'text-red-500 font-medium' : 'text-gray-400'}`}>
            {isOverdue ? '⚠ ' : ''}Due: {new Date(card.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
        ) : (
          <span />
        )}

        <button
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
          className="text-gray-200 hover:text-red-400 transition text-sm opacity-0 group-hover:opacity-100"
        >
          🗑
        </button>
      </div>
    </div>
  )
}

export default CardItem