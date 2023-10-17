// Importing modules from Node.js using the CommonJS 'require' syntax
// Importing the Router module from the express package. This class allows you to create modular, mountable route handlers. You can use it to define routes in separate fils and then bring them together in your main application file.
const router = require("express").Router();

// IMPORTANT: Must put these in {} because you're importing aliases
const { Blog, Post, User } = require("../models");

// GET ALL route, serializes blog object that is received
router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll();

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render("all", { blogs });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ! Starting to think that I might need to define the relationships to then route them right...look at Activity 11 -> controllers -> home-routes.js

// GET ONE route,
router.get("/blog/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);
    if (!blogData) {
      res.status(404).json({ message: "Unable to find a blog with this id." });
      return;
    }
    const blog = blogData.get({ plain: true });
    res.render("blog", blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export the router for use in other files
module.exports = router;
