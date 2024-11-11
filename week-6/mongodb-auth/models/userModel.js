const User = require('../schemas/userSchema');

class UserModel {
  // Create a new user in the database
  async createUser(username, password) {
    const newUser = new User({ username, password });
    return await newUser.save();
  }
  async findByUsername(username) {
    return await User.findOne({ username });
  }
}

module.exports = new UserModel();
