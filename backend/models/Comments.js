const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    annoucement: { type: mongoose.Schema.Types.ObjectId, ref: 'Annoucement'},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    message: { type: String, required: true },
    createdDate: { type: String, required: true }
})


module.exports = mongoose.model('Comments', commentSchema);