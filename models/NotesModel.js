const { Schema, model } = require('mongoose')

const notesSchema = Schema({
    courseId: {
        type: Number,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'Users'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

const NotesModel = model('notes', notesSchema)

module.exports = NotesModel