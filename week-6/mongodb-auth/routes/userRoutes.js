const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a user
router.post('/create', userController.createUser);

// Route to get a user by username
router.get('/:username', userController.findUserByUsername);

module.exports = router;
