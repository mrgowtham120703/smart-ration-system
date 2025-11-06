const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const JWT_SECRET = process.env.JWT_SECRET || 'verysecretkey';

exports.consumerLogin = async (req, res) => {
    const { familyCardNumber } = req.body;
    if (!familyCardNumber) return res.status(400).json({ msg: 'Card required' });

    // For demo: create to fetch consumer. In real system this would be validated against govt DB.
    let user = await User.findOne({ familyCardNumber });
    if (!user) {
        // create demo user and randomly set poverty
        user = await User.create({ type: 'consumer', familyCardNumber, name: 'Demo Consumer', povertyLevel: Math.random() > 0.5 ? 'APL' : 'BPL' });
    }
    const token = jwt.sign({ id: user._id, type: 'consumer', familyCardNumber: user.familyCardNumber, povertyLevel: user.povertyLevel }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { name: user.name, familyCardNumber: user.familyCardNumber, povertyLevel: user.povertyLevel } });
}

exports.salesmanLogin = async (req, res) => {
    const { shopNumber, password } = req.body;
    if (!shopNumber || !password) return res.status(400).json({ msg: 'Missing' });

    // Demo : if shop exists check passwor, else create demo shop
    let user = await User.findOne({ shopNumber })
    if (!user) {
        const hash = await bcrypt.hash(password, 8);
        user = await User.create({ type: 'salesman', shopNumber, passwordHash: hash, name: 'Demo Shop' });
    } else {
        // Validate password
        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return res.status(401).json({ msg: 'Invalid' })
    }
    const token = jwt.sign({ id: user._id, type: 'salesman', shopNumber: user.shopNumber }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { name: user.name, sopNumber: user.shopNumber } });
}