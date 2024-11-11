const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/subscription', subscriptionRoutes);
app.use('/payment', paymentRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
