// Author: Jayant Patidar

const PostDAL = require("./posts.dal");

class PostService {
  constructor() {
    this.postsDAL = new PostDAL();
  }

  async getAllPosts() {
    try {
      const allPosts = await this.postsDAL.getAllPosts();
      return allPosts;
    } catch (error) {
      throw error;
    } finally {
      //finally block
    }
  }

  // Service method to create a new post
  async createPost(postData) {
    try {
      const newPost = await this.postsDAL.createPost(postData);
      return newPost;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PostService;
