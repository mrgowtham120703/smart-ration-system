const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');

router.post('/consumer-login', authCtrl.consumerLogin);
router.post('/salesman-login', authCtrl.salesmanLogin);

module.exports = router;