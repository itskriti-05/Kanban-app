import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import CardItem from './CardItem'
import CardModal from './CardModal'

const COLUMN_COLORS = {
  'To Do':       { bg: 'bg-pink-100',   dot: 'bg-pink-400',   border: 'border-pink-200',   badge: 'bg-pink-200 text-pink-700' },
  'In Progress': { bg: 'bg-amber-50',   dot: 'bg-amber-400',  border: 'border-amber-200',  badge: 'bg-amber-100 text-amber-700' },
  'Done':        { bg: 'bg-violet-100', dot: 'bg-violet-400', border: 'border-violet-200', badge: 'bg-violet-200 text-violet-700' },
}

const DEFAULT_COLOR = { bg: 'bg-teal-50', dot: 'bg-teal-400', border: 'border-teal-200', badge: 'bg-teal-100 text-teal-700' }

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
      <div className={`min-w-[85vw] sm:min-w-[280px] max-w-[85vw] sm:max-w-[280px] ${colors.bg} rounded-3xl p-4 flex flex-col gap-3 h-fit`}>

        {/* Column header */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
            <span className="text-sm font-bold text-[#1a1a2e]">{column.title}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${colors.badge}`}>
              {column.cards.length}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowAddModal(true)}
              className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/70 text-gray-400 hover:text-purple-700 transition"
            >
              <Plus size={16} />
            </button>
            <button
              onClick={onDeleteColumn}
              className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/70 text-gray-300 hover:text-red-400 transition"
            >
              <X size={14} />
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
            className="border-2 border-dashed border-white/70 rounded-2xl p-6 text-center cursor-pointer hover:border-white transition flex flex-col items-center gap-1"
          >
            <Plus size={14} className="text-gray-400" />
            <p className="text-xs text-gray-400">Add a card</p>
          </div>
        )}
      </div>

      {showAddModal && (
        <CardModal
          onSave={handleAddCard}
          onClose={() => setShowAddModal(false)}
        />
      )}

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