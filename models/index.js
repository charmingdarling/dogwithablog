// Import your models from other files
const Blog = require("./Blog");
const Post = require("./Post");
const User = require("./User");

// Relationships are IDed here

// - belongsTo
// - hasMany
// - belongsToMany

//! Do I use 'user_id' ? or 'username_id' or ??

// In Blog.js
Blog.hasMany(Post);

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

// In Post.js
Post.belongsTo(Blog);
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// In User.js
User.hasMany(Blog, {
  foreignKey: "user_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

module.exports = { Blog, User, Post };
