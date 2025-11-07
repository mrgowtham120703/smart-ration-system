const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a new order (after consumer "Proceed to buy")

router.post("/create", async (req, res) => {
    try {
        const { consumerName, cardnumber, items, totalPrice, paymentMode, status } = req.body;

        const newOrder = new Order({
            consumerName,
            cardnumber,
            items,
            totalPrice,
            paymentMode,
            status,
            date: new Date(),
        });

        await newOrder.save();
        res.status(201).json({
            message: "Order Places Successfully",
            order: newOrder,
        });
    } catch (error) {
        console.error("Order creation failed:", error);
        res.status(500).json({ message: "Failed to create order" });
    }
});

// Fetch all Orders (Salesman dashboard)

router.get('/all', async (req, res) => {
    try {
        const orders = (await Order.find()).toSorted({ date: -1 });
        res.json(orders)
    } catch (error) {
        console.log('Fetching orders failed:', error);
        res.status(500).json({ message: "Failed to fetch orders" })
    }
});

// Fetch orders by card number (Consumer view)

router.get('/:cardNumber', async (req, res) => {
    try {
        const { cardNumber } = req.params;
        const orders = await Order.find({ cardNumber }).sort({ date: -1 });
        res.json(orders);
    } catch (error) {
        console.log('Fetching consumer orders failed:', error);
        res.status(500).json({ message: "Failed to fetch consumer orders" });
    }
});

module.exports = router; 