const userService = require('../services/userService');

class UserController {
  async createUser(req, res) {
    const { username, password } = req.body;
    try {
      const user = await userService.createUser(username, password);
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  }
  async findUserByUsername(req, res) {
    const { username } = req.params;
    try {
      const user = await userService.findUserByUsername(username);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
  }
}

module.exports = new UserController();
