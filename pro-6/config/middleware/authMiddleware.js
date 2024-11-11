const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No Token Provided' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Attach user info to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: 'Access Denied: Invalid Token' });
  }
};

module.exports = verifyToken;
