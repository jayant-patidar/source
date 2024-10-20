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

  // Get posts by seeker ID
  async getPostsBySeekerId(request, response, next) {
    try {
      const seekerId = request.body.seekerId;
      const posts = await this.postService.getPostsBySeekerId(seekerId);
      if (posts.length) {
        response.status(200).json(posts);
      } else {
        response
          .status(404)
          .json({ error: "No posts found for this seeker ID." });
      }
    } catch (error) {
      next(error);
    }
  }

  // Get posts and User by seeker ID
  async getPostsAndUserBySeekerId(request, response, next) {
    try {
      const seekerId = request.body.seekerId;
      const postsWithUser = await this.postService.getPostsAndUserBySeekerId(
        seekerId
      );
      response.status(200).json(postsWithUser);
    } catch (error) {
      next(error);
    }
  }

  // Get all posts with seeker data
  async getAllPostsWithSeeker(request, response, next) {
    try {
      const postsWithSeeker = await this.postService.getAllPostsWithSeeker();
      response.status(200).json(postsWithSeeker);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostController();
