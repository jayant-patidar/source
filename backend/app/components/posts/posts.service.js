// Author: Jayant Patidar

const PostDAL = require("./posts.dal");

const UserDAL = require("../users/users.dal");

class PostService {
  constructor() {
    this.postsDAL = new PostDAL();

    this.userDAL = new UserDAL();
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

  // Get posts by seeker ID
  async getPostsBySeekerId(seekerId) {
    try {
      const posts = await this.postsDAL.getPostsBySeekerId(seekerId);
      return posts;
    } catch (error) {
      throw error;
    }
  }

  // Get posts and User by seeker ID
  async getPostsAndUserBySeekerId(seekerId) {
    try {
      const postsByUser = await this.postsDAL.getPostsBySeekerId(seekerId);
      const user = await this.userDAL.getUserById(seekerId);

      const postsWithUser = {
        posts: postsByUser,
        user: user,
      };

      return postsWithUser;
    } catch (error) {
      throw error;
    }
  }

  // Get all posts seeker data
  async getAllPostsWithSeeker() {
    try {
      const postsWithSeeker = await this.postsDAL.getAllPostsWithSeeker();

      return postsWithSeeker;
    } catch (error) {
      throw error;
    }
  }

  async getPostWithSeekerByPostId(postId) {
    try {
      const postWithSeekerByPodtId =
        await this.postsDAL.getPostWithSeekerByPostId(postId);

      return postWithSeekerByPodtId;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PostService;
