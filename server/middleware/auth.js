const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'verysecretkey';

module.exports = function (role) {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ msg: 'No token' });
        try {
            const data = jwt.verify(token, JWT_SECRET);
            if (role && data.type !== role) return res.json(403).json({ msg: 'Forbidden' });
            req.user = data;
            next();
        } catch (e) {
            return res.status(401).json({ msg: 'Invalid token' });
        }
    }
}