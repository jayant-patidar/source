// Author: Jayant Patidar

const UserDAL = require("./users.dal");

class UserService {
  constructor() {
    this.userDAL = new UserDAL();
  }

  async createUser(userData) {
    try {
      const newUser = await this.userDAL.createUser(userData);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers() {
    try {
      const allUsers = await this.userDAL.getAllUsers();
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(userId) {
    try {
      const user = await this.userDAL.getUserById(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
