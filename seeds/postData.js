const { Post } = require("../models");

const postData = [
  {
    blog_id: 1,
    user_id: 1,
    text: "Yeah. Make sure you hold eye contact as long as possible, so they feel the power.",
    author: "Maxine",
    created_on: "10/17/2023",
  },
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
