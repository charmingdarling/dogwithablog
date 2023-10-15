// Importing modules from Node.js using the CommonJS 'require' syntax
// Importing the Router module from the express package. This class allows you to create modular, mountable route handlers. You can use it to define routes in separate fils and then bring them together in your main application file.
const router = require("express").Router();

// Imports the build-in `path` module, which provides utilities for working with the file and directory paths. This module is often used to construct or manipulate file paths in a cross platform manner
// The path module is particularly useful for dealing with file paths in a way that's agnostic to the underlying operating system. It helps ensure that your code works consistently across different platforms.
const path = require("path");

// Define routes using router.get(), router.post(), etc.
router.get("/", async (req, res) => {
  // here, the index.html is rendered
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

// Export the router for use in other files
module.exports = router;
