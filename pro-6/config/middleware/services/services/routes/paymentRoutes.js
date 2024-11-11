const express = require('express');
const { processPayment } = require('../services/paymentService');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/pay', verifyToken, async (req, res) => {
  const { paymentMethodId, plan } = req.body;

  try {
    const subscription = await processPayment(req.user.userId, paymentMethodId, plan);
    res.status(200).json(subscription);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
