const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/productController');
const auth = require('../middleware/auth');

router.get('/all', productsCtrl.getAll);
router.get('/consumer', auth('consumer'), productsCtrl.getForConsumer);
router.post('/create-sample', productsCtrl.createSample);

module.exports = router;