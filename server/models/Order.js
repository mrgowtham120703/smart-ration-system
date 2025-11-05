const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    qtykg: Number,
    pricePerKg: Number,
    lineTotal: Number
});

const orderSchema = new mongoose.Schema({
    consumerCard: String,
    consumerName: String,
    povertyLevel: String,
    items: [itemSchema],
    totalAmount: Number,
    paymentMode: { type: String, enum: ['ONLINE', 'OFFLINE'] },
    paymentStatus: { type: String, enum: ['PENDING', 'PAID'], default: 'PENDING' },
    acknowledgementId: { tyoe: String, unique: true },
    createdAt: { type: Date, default: Date.now },
    pickupSlot: String,
    status: { type: String, enum: ['PLACED', 'READY', 'PICKED', 'CANCELLED'], default: 'PLACED' }
});

module.exports = mongoose.model('Order', orderSchema);