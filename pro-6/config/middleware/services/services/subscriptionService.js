const db = require('../config/db');

const createSubscription = async (userId, plan) => {
  const result = await db.query(
    'INSERT INTO subscriptions (user_id, plan, status, start_date) VALUES ($1, $2, $3, NOW()) RETURNING *',
    [userId, plan, 'active']
  );
  return result.rows[0];
};

const getUserSubscription = async (userId) => {
  const result = await db.query(
    'SELECT * FROM subscriptions WHERE user_id = $1 AND status = $2',
    [userId, 'active']
  );
  return result.rows[0];
};

module.exports = { createSubscription, getUserSubscription };
