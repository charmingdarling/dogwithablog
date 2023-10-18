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

// ! Help: My blogData console logs as null and it returns 404 Not Found. I already seeded my stuff. So what am I doing wrong?

// GET ONE route,
router.get("/blog/:id", async (req, res) => {
  try {
    console.log("Request ID:", req.params.id);
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User }],
      attributes: { include: ["id"], exclude: ["password"] },
    });
    console.log("Blog Data:", blogData);
    if (!blogData) {
      res.status(404).json({ message: "Unable to find a blog with this id." });
      return;
    }
    const blog = blogData.get({ plain: true });
    console.log(blog);

    // This line is rendering a view named "blog" and passing the `blog` object to that view. The `blog` object is the data retrieved from your database for the specified blog ID. The view can then use this data to render the blog details on the page.
    res.render("blog", blog);

    // res.render("blog", {
    //   ...blog,
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/blog/:id", async (req, res) => {
//   try {

//   }
// })

// Export the router for use in other files
module.exports = router;
