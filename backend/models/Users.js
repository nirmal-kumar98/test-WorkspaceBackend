const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true},
    emailId: { type: String, required: true, unique: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    noOfEmployees: { type: String, required: true },
    domainName: { type: String, required: true },
    password: { type: String, required: true },
    companyId: { type: String, required: true },
    verification: { type: Boolean, default: false},
    otp: { type: String, required: true }
});


module.exports = mongoose.model('Users', userSchema);