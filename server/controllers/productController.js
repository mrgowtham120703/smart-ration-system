const Product = require('../models/Product');

exports.getAll = async (req, res) => {
    const products = await Product.find({ active: true });
    res.json(products);
}

exports.getForConsumer = async (req, res) => {
    // use req.user.povertLevel injected by auth middleware
    const pov = req.user.povertyLevel;
    const products = await Product.find({ active: true });
    // filter based on allocation presence for that poverty level
    const allowed = products.filter(p => p.allocations.some(a => a.povertyLevel === pov));
    res.json(allowed);
}

exports.createSample = async (req, res) => {
    // one-time : create sample products
    const samples = [
        { name: 'Rice', pricePerKg: 0, availableQtyKg: 1000, allocations: [{ povertyLevel: 'APL', maxQtyPerMonth: 10 }, { povertyLevel: 'BPL', maxQtyPerMonth: 20 }] },
        { name: 'Sugar', pricePerKg: 20, availableQtyKg: 1000, allocations: [{ povertyLevel: 'APL', maxQtyPerMonth: 2 }, { povertyLevel: 'BPL', maxQtyPerMonth: 4 }] },
        { name: 'Dhal', pricePerKg: 35, availableQtyKg: 1000, allocations: [{ povertyLevel: 'APL', maxQtyPerMonth: 2 }, { povertyLevel: 'BPL', maxQtyPerMonth: 4 }] },
        { name: 'Oil', pricePerKg: 100, availableQtyKg: 1000, allocations: [{ povertyLevel: 'APL', maxQtyPerMonth: 1 }, { povertyLevel: 'BPL', maxQtyPerMonth: 2 }] },
        { name: 'Wheat', pricePerKg: 0, availableQtyKg: 1000, allocations: [{ povertyLevel: 'APL', maxQtyPerMonth: 5 }, { povertyLevel: 'BPL', maxQtyPerMonth: 10 }] },
    ];
    await Product.deleteMany({});
    await Product.insertMany(samples);
    res.json({ msg: 'Sample product created' })
}