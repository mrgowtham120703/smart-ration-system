const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: {type: String, required: true},
    qtykg: {type: Number, default: 0},
    pricePerKg: {type: Number, default: 0},
    lineTotal: {type: Number, default: 0}
});

const orderSchema = new mongoose.Schema({
    consumerCard: {type: String, required: true},
    consumerName: {type: String, required: true},
    povertyLevel: {type: String},
    items: {type:[itemSchema], default:[]},
    totalAmount: {type: Number, default: 0},
    paymentMode: { type: String, enum: ['ONLINE', 'OFFLINE'] },
    paymentStatus: { type: String, enum: ['PENDING', 'PAID'], default: 'PENDING' },
    acknowledgementId: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now },
    pickupSlot: String,
    status: { type: String, enum: ['PLACED', 'READY', 'PICKED', 'CANCELLED'], default: 'PLACED' }
});

module.exports = mongoose.model('Order', orderSchema);