// Author: Jayant Patidar

const Post = require("./posts.model");

class PostDAL {
  // Get all posts
  async getAllPosts() {
    const allPosts = Post.find({});
    return allPosts;
  }

  // Create a new post
  async createPost(postData) {
    const newPost = new Post(postData); // Creating a new Post document
    return await newPost.save(); // Save the new post in the database
  }
}

module.exports = PostDAL;
