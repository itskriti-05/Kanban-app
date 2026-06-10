const Board = require('../models/Board')

exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find({ user: req.user.id })
    res.json(boards)
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
}

exports.createBoard = async (req, res) => {
  try {
    const { title } = req.body
    const board = await Board.create({
      title,
      user: req.user.id,
      columns: [
        { title: 'To Do', cards: [] },
        { title: 'In Progress', cards: [] },
        { title: 'Done', cards: [] },
      ]
    })
    res.status(201).json(board)
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
}

exports.updateBoard = async (req, res) => {
  try {
    const board = await Board.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    )
    if (!board) return res.status(404).json({ message: 'Board not found' })
    res.json(board)
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
}

exports.deleteBoard = async (req, res) => {
  try {
    await Board.findOneAndDelete({ _id: req.params.id, user: req.user.id })
    res.json({ message: 'Board deleted' })
  } catch {
    res.status(500).json({ message: 'Server error' })
  }
}