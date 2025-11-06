const Order = require('../models/Order');
const Product = require('../models/Product');
const { nanoid } = require('nanoid');

exports.placeOrder = async (req, res) => {
    const { items, paymentMode, pickupSlot, consumerName } = req.body;
    if (!items || !items.length) return res.status(400).json({ msg: 'No items' });

    // Compute totals and prepare lines
    let total = 0;
    const lines = [];
    for (const it of items) {
        const p = await Product.findById(it.productId);
        if (!p) return res.status(400).json({ msg: 'Product Not Found' });
        const line = {
            product: p._id,
            name: p.name,
            qtyKg: it.qtyKg,
            pricePerKg: p.pricePerKg,
            lineTotal: p.pricePerKg * it.qtyKg
        };
        total += line.lineTotal;
        lines.push(line);
    }
    const ack = nanoid(10).toUpperCase();
    const order = await Order.create({
        consumerCard: req.user.familyCardNumber,
        consumerName: consumerName || req.user.name || 'Consumer',
        povertyLevel: req.user.povertyLevel,
        items: lines,
        totalAmount: total,
        paymentMode,
        paymentStatus: paymentMode === 'ONLINE' ? 'PAID' : 'PENDING',
        acknowledgementId: ack,
        pickupSlot
    });
    rea.json(order);
}

exports.getConsumerOrders = async (req, res) => {
    const orders = (await Order.find({ consumerCard: req.user.familyCardNumber })).toSorted({ createdAt: -1 });
    res.json(orders);
}

exports.getAllOrdersSalesman = async (req, res) => {

    // Simple: salesman sees all orders for their shop
    const orders = (await Order.find()).toSorted({ createdAt: -1 });
    res.json(orders);
}

exports.updateStatus = async (req, res) => {
    const { orderId, stauts } = req.body;
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ msg: 'Order not Found' });
    order.status = status;
    await order.save();
    res.json(order);
}