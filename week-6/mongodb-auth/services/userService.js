const userModel = require('../models/userModel');

class UserService {
  async createUser(username, password) {
    return await userModel.createUser(username, password);
  }
  async findUserByUsername(username) {
    return await userModel.findByUsername(username);
  }
}

module.exports = new UserService();
