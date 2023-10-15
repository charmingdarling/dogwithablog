// Import the express dependency
const express = require("express");
//
const path = require("path");
// Import sequelize connection,modularizing routes that were separated into different files for better organization and maintainability
const sequelize = require("./config/databaseConnection");

// Sets up the Express App
const app = express();

// Specify the port express will run on
const PORT = process.env.PORT || 3001;

// `app.use()`: middleware function that has access to (req) and (res) and the next middleware function in the application's request-response cycle
// `express.static()`: this is a built-in middleware function in express to serve static files, such as images, CSS files, and JavaScript files. It takes the root director from which to serve static assets.
// `path.join(__dirname, "public")`:`path.join`
// - is a Node.js method that joins all given path segments together.
// - In this case, it is used to create an absolute path to the "public" directory.
// - `__dirname` is a global variables in Node.js that represents the directory name of the current module (i.e., the directory where the current script resides)
// - `__dirname` is used to ensure that the path is absolute, regardless of the current working directory
// - `"public"` is the name of the directory containing the static files

// Putting it all together:
// - the `express.static()` middleware is configured to serve static files form teh "public" directory
// - the entire middleware is registered using `app.use()`, which means it will be applied to all routes

// when a request is made for a static file (e.g. an image or a CSS file), express will look in the public directory and serve the file if it exists. This is a common practice for serving assets in web apps
// - Example: If you have an image called `logo.png` in the "public" directory, it can be accessed in the browser at `http://yourdomain.com/logo.png`
// - This middleware lets you serve static assets without having to create a specific route for each file

app.use(express.static(path.join(__dirname, "public")));

//Sets up the routes

app.use(require("./controllers/model1-routes"));

// Sync sequelize models to the database, then turn on server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on: http://localhost:' +  ${PORT}`)
  );
});

// Eventually cookies will also be here in Activity 14
