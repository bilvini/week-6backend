const express = require('express');
const { createSubscription, getUserSubscription } = require('../services/subscriptionService');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

// Route to get user's subscription
router.get('/status', verifyToken, async (req, res) => {
  try {
    const subscription = await getUserSubscription(req.user.userId);
    if (subscription) {
      res.status(200).json(subscription);
    } else {
      res.status(404).json({ message: 'No active subscription found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
