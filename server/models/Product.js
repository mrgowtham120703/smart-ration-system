const mongoose = require('mongoose');

const allocateSchema = new mongoose.Schema({
    povertyLevel: { type: String, enum: ['APL', 'BPL'] },
    maxQtyPerMonth: Number
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pricePerKg: { type: Number, required: true },
    availbleQtyKg: { type: Number, default: 0 },
    allocation: [allocateSchema],  // How product is allocated
    active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Product', productSchema)