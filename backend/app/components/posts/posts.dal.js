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

  // Get post with seeker data by postId
  async getPostWithSeekerByPostId(postId) {
    try {
      // Populate the seeker field and exclude the password
      const postWithSeeker = await Post.findById(postId)
        .populate("seekerId", "-password")
        .exec();

      return postWithSeeker;
    } catch (error) {
      throw new Error("Error retrieving post with seeker data.");
    }
  }
}

module.exports = PostDAL;
