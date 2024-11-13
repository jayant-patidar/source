// Author: Jayant Patidar

const UserService = require("./users.service");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(req, res, next) {
    try {
      const newUser = await this.userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const allUsers = await this.userService.getAllUsers();
      if (allUsers.length > 0) {
        res.status(200).json(allUsers);
      } else {
        res.status(404).json({ error: "No users found." });
      }
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    try {
      const user = await this.userService.getUserById(req.body.seekerId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found." });
      }
    } catch (error) {
      next(error);
    }
  }

  // Controller
  async getUserByIdWithoutPassword(req, res, next) {
    try {
      const user = await this.userService.getUserByIdWithoutPassword(
        req.body.seekerId
      );
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found." });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
