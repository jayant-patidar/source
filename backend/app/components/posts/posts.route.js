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

// Get posts by seeker ID
router
  .route("/getPostsBySeekerId")
  .post(postsController.getPostsBySeekerId.bind(postsController));

// Get posts and User by seeker ID
router
  .route("/getPostsAndUserBySeekerId")
  .post(postsController.getPostsAndUserBySeekerId.bind(postsController));

// Get posts and User by seeker ID
router
  .route("/getAllPostsWithSeeker")
  .get(postsController.getAllPostsWithSeeker.bind(postsController));

module.exports = router;
