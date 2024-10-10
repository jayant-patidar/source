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

  // Get posts by seeker ID
  async getPostsBySeekerId(seekerId) {
    return await Post.find({ seekerId }); // Assuming seekerId is of type ObjectId
  }

  // Get all posts with seeker data
  async getAllPostsWithSeeker() {
    return await Post.find({})
      .populate("seekerId", "-password") // Adjust fields as needed
      .exec();
  }
}

module.exports = PostDAL;
