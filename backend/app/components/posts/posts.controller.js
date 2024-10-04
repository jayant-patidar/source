const PostService = require("./posts.service");

class PostController {
  constructor() {
    this.postService = new PostService();
  }

  // Get all posts
  async getAllPosts(request, response, next) {
    try {
      const allPosts = await this.postService.getAllPosts();
      console.log("controller" + allPosts);
      if (allPosts) {
        response.status(200).json(allPosts);
      } else {
        response.status(404).json({ error: "No records found." });
      }
    } catch (error) {
      next(error);
    }
  }

  // Create a new post
  async createPost(request, response, next) {
    try {
      const newPost = await this.postService.createPost(request.body);
      console.log("controller");
      response.status(201).json(newPost);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostController();
