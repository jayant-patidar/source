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
    const newPost = new Post(postData);
    return await newPost.save();
  }

  // Get posts by seeker ID
  async getPostsBySeekerId(seekerId) {
    return await Post.find({ seekerId });
  }

  // Get all posts with seeker data
  async getAllPostsWithSeeker() {
    return await Post.find({}).populate("seekerId", "-password").exec();
  }
}

module.exports = PostDAL;
