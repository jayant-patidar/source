// Author: Jayant Patidar

const express = require("express");
const userController = require("./users.controller");

const router = express.Router();

// Create a new user
router.post("/createUser", userController.createUser.bind(userController));

// Get all users
router.get("/getAllUsers", userController.getAllUsers.bind(userController));

// Get user by ID
router.post("/getUserById", userController.getUserById.bind(userController));

module.exports = router;
