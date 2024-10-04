// Author: Jayant Patidar

const express = require("express");

const postsController = require("./posts.controller");

const router = express.Router();

// Create a new post
router
  .route("/createPost")
  .post(postsController.createPost.bind(postsController));

// Get all the posts
router
  .route("/getAllPosts")
  .get(postsController.getAllPosts.bind(postsController));

// Get post by ID (placeholder for now)

module.exports = router;
