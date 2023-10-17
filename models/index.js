// Import your models from other files
const Blog = require("./Blog"); // ! Why is this underline?!
const Post = require("./Post");
const User = require("./User");

// Relationships are IDed here

// - belongsTo
// - hasMany
// - belongsToMany

// In Blog.js
Blog.hasMany(Post, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// In Post.js
Post.belongsTo(Blog, {
  foreignKey: "blog_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// In User.js
User.hasMany(Blog, {
  foreignKey: "user_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

module.exports = { Blog, User, Post };
