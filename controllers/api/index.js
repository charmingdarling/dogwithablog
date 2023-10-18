const router = require("express").Router();

const blogRoutes = require("./blogRoutes");

// Tell middleware what to use, "/blogs" - is the path
router.use("/blogs", blogRoutes);

module.exports = router;
