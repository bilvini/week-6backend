const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'your-db-user',
  password: 'your-db-password',
  database: 'subscription_service',
});

client.connect();

module.exports = client;
