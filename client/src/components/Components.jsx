import { useState } from 'react'
import CardItem from './CardItem'
import CardModal from './CardModal'

const COLUMN_COLORS = {
  'To Do': { bg: 'bg-pink-100', dot: 'bg-pink-400', border: 'border-pink-200', badge: 'bg-pink-200 text-pink-800' },
  'In Progress': { bg: 'bg-amber-50', dot: 'bg-amber-400', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-800' },
  'Done': { bg: 'bg-violet-100', dot: 'bg-violet-400', border: 'border-violet-200', badge: 'bg-violet-200 text-violet-800' },
}

const DEFAULT_COLOR = { bg: 'bg-teal-50', dot: 'bg-teal-400', border: 'border-teal-200', badge: 'bg-teal-100 text-teal-800' }

export default function Column({ column, colIndex, onAddCard, onUpdateCard, onDeleteCard, onDeleteColumn }) {
  const [showAddModal, setShowAddModal] = useState(false)
  const [editCard, setEditCard] = useState(null)
  const [editCardIndex, setEditCardIndex] = useState(null)

  const colors = COLUMN_COLORS[column.title] || DEFAULT_COLOR

  const handleAddCard = (cardData) => {
    onAddCard(cardData)
    setShowAddModal(false)
  }

  const handleEditCard = (cardData) => {
    onUpdateCard(editCardIndex, cardData)
    setEditCard(null)
    setEditCardIndex(null)
  }

  const openEdit = (card, index) => {
    setEditCard(card)
    setEditCardIndex(index)
  }

  return (
    <>
      <div className={`min-w-[260px] max-w-[260px] ${colors.bg} rounded-2xl p-3 flex flex-col gap-3 h-fit`}>

        {/* Column header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${colors.dot}`}></div>
            <span className="text-sm font-semibold text-[#1a1a2e]">{column.title}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors.badge}`}>
              {column.cards.length}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowAddModal(true)}
              className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/60 text-gray-400 hover:text-purple-700 transition text-lg"
            >
              +
            </button>
            <button
              onClick={onDeleteColumn}
              className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-white/60 text-gray-300 hover:text-red-400 transition text-xs"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Cards */}
        {column.cards.map((card, index) => (
          <CardItem
            key={index}
            card={card}
            borderColor={colors.border}
            onClick={() => openEdit(card, index)}
            onDelete={() => onDeleteCard(index)}
          />
        ))}

        {/* Empty state */}
        {column.cards.length === 0 && (
          <div
            onClick={() => setShowAddModal(true)}
            className="border-2 border-dashed border-white/60 rounded-xl p-4 text-center cursor-pointer hover:border-white transition"
          >
            <p className="text-xs text-gray-400">+ Add a card</p>
          </div>
        )}
      </div>

      {/* Add card modal */}
      {showAddModal && (
        <CardModal
          onSave={handleAddCard}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* Edit card modal */}
      {editCard && (
        <CardModal
          card={editCard}
          onSave={handleEditCard}
          onClose={() => { setEditCard(null); setEditCardIndex(null) }}
          onDelete={() => { onDeleteCard(editCardIndex); setEditCard(null) }}
        />
      )}
    </>
  )
}