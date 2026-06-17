const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const {
  getBoards,
  createBoard,
  updateBoard,
  deleteBoard
} = require('../controllers/boardController')

router.get('/', auth, getBoards)
router.post('/', auth, createBoard)
router.put('/:id', auth, updateBoard)
router.delete('/:id', auth, deleteBoard)
router.get('/:id', auth, async (req, res) => {
  try {
    const board = await require('../models/Board').findOne({
      _id: req.params.id,
      user: req.user.id
    })
    if (!board) return res.status(404).json({ message: 'Board not found' })
    res.json(board)
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router