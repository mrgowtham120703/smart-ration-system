const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    type: { type: String, enum: ['consumer', 'salesman'], required: true },

    // Consumer fields

    familyCardNumber: { type: String }, // Consumer only
    povertyLevel: { type: String, enum: ['APL', 'BPL'] },
    name: String,

    // Salesman fields
    shopNumber: { type: String },
    passwordHash: String,

});

module.exports = mongoose.model('User', userSchema);