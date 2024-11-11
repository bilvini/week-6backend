const stripe = require('../config/stripe');
const db = require('../config/db');
const { createSubscription } = require('./subscriptionService');

const processPayment = async (userId, paymentMethodId, plan) => {
  try {
    // Create a payment intent using Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: plan === 'premium' ? 1000 : 100, // Assuming price in cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });

    // If payment successful, create a subscription in the database
    if (paymentIntent.status === 'succeeded') {
      return await createSubscription(userId, plan);
    } else {
      throw new Error('Payment failed');
    }
  } catch (error) {
    throw new Error('Payment processing error: ' + error.message);
  }
};

module.exports = { processPayment };
