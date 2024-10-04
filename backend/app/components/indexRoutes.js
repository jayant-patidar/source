const express = require("express");
const router = express.Router();

const postsRoutes = require("./posts/posts.route");
const userRoutes = require("./users/users.route");

const healthCheck = (request, response) => {
  response.status(200).send({
    status: true,
  });
};

router.use("/posts", postsRoutes);
router.use("/users", userRoutes);

module.exports.router = router;
module.exports.healthCheck = healthCheck;
