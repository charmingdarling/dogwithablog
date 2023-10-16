// Importing modules from Node.js using the CommonJS 'require' syntax
// Importing the Router module from the express package. This class allows you to create modular, mountable route handlers. You can use it to define routes in separate fils and then bring them together in your main application file.
const router = require("express").Router();

// IMPORTANT: Must put these in {} because you're importing aliases
const { Blog } = require("../models"); 

// GET ALL route, serializes blog object that is received
router.get("/", async (req, res) => {
  const blogData = await Blog.findAll({
    include: [{ model: Blog }],
  });
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  console.log(blogs);
  res.render("all", { blogs });
});

// GET ONE route,
router.get("/blog/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPK(req.params.id);
    if (!dishData) {
      res.status(404).json({ message: "Unable to find a blog with this id." });
      return;
    }
    const blog = blogData.get({ plain: true });
    res.render("blogs", blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export the router for use in other files
module.exports = router;
