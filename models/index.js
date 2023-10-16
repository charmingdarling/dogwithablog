// Import your models from other files
const Blog = require("./Blog");
const User = require("./User");

// Relationships are IDed here

// - belongsTo
// - hasMany
// - belongsToMany

//! Do I use 'user_id' ? or 'username_id' or ??

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

Blog.hasMany(Post, {
  foreignKey: 
});

module.exports = { Blog, User };
