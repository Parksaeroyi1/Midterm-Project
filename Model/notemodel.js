const mongoose = require('mongoose');

const notesSchema = mongoose.Schema(
    {
    title: {
        type: String,
    },
    description: {
        type: String,
    }
},
    {
        timestamps: true
    }
)

const Note = mongoose.model('notes', notesSchema);

module.exports = Note;