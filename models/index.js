// Import your models from other files
const blog = require("Blog");
const model2 = require("./model2");
const model3 = require("./model3");

// Relationships are IDed here

// - belongsTo
// - hasMany
// - belongsToMany

module.exports = { Blog, model2, model3 };
