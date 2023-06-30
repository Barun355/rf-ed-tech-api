const NotesModel = require("../models/NotesModel")

const handleCreateNote = async (req, res) => {
    await NotesModel.create(req.body)
}

const handleFetchNotes = async (req, res) => {
    const notes = await NotesModel.find({})
    res.json(notes)
}

const handleUpdateNoteById = async (req, res) => {
    const notes = await NotesModel.findByIdAndUpdate(req.body._id, req.body.payload)
    res.json(notes)
}

const handleDeleteNoteById = async (req, res) => {
    console.log(req.params.id)
    await NotesModel.findByIdAndDelete({_id: req.params.id})
}
module.exports = {
    handleCreateNote,
    handleFetchNotes,
    handleUpdateNoteById,
    handleDeleteNoteById
}