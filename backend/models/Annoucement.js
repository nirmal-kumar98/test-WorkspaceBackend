const mongoose = require('mongoose');

const notifyShema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    emailId: { type: String, required: false }
})

const annoucementSchema = mongoose.Schema({
    subject: { type: String, required: true },
    category: { type: String, required: true },
    descriptions: { type: String, required: true },
    expiryDateForReminder: { type: String, required: false },
    dateForEvent: { type: String, required: false },
    timeForEvent: { type: String, required: false },
    location: { type: String, required: false },
    notifyPeople: [ notifyShema ],
    comments: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Comments' } ],
    createdDate: { type: String, required: true }
})


module.exports = mongoose.model('Annoucement', annoucementSchema);