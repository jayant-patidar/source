// Author: Jayant Patidar

const User = require("./users.model");

class UserDAL {
  async createUser(userData) {
    const newUser = new User(userData);
    return await newUser.save();
  }

  async getAllUsers() {
    return await User.find({});
  }

  async getUserById(userId) {
    return await User.findById(userId);
  }

  // DAL
  async getUserByIdWithoutPassword(userId) {
    return await User.findById(userId).select("-password");
  }
}

module.exports = UserDAL;
