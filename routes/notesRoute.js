const { Router } = require('express')
const { handleCreateNote, handleFetchNotes, handleUpdateNoteById, handleDeleteNoteById } = require('../controllers/NotesController')


const router = Router()

router.get('/', handleFetchNotes)
router.post('/', handleCreateNote)
router.patch('/', handleUpdateNoteById)
router.delete('/:id', handleDeleteNoteById)

module.exports = router