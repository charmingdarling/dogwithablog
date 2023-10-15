// Import the express dependency
const express = require("express");

// Imports the build-in `path` module, which provides utilities for working with the file and directory paths.
const path = require("path");

// Import sequelize connection,modularizing routes that were separated into different files for better organization and maintainability
const sequelize = require("./config/databaseConnection");

// Importing express handlebars (this is a Node.js module)
const exphbs = require("express-handlebars");

// Import the handlebars module
const handlebars = require("handlebars");

// ? Start Below - const hbs = exphbs.create({});----------------//
// Creating an instance of an Express Handlebars engine with additional configuration options.

// Example code:
// const hbs = exphbs.create({
//   extname: 'hbs', // Set the file extension for templates
//   layoutsDir: 'views/layouts/', // Specify the directory for layout templates
//   defaultLayout: 'main', // Set the default layout template
//   helpers: {
//     // Define custom Handlebars helpers
//     formatDate: function (date) {
//       // Custom logic to format a date
//       return new Intl.DateTimeFormat('en-US').format(date);
//     },
//     // More helpers...
//   },
// });

// In the example above:
// extname: Sets the file extension for template files to '.hbs'.
// layoutsDir: Specifies the directory where layout templates are located.
// defaultLayout: Sets the default layout template to 'main'.
// helpers: Defines custom Handlebars helpers that can be used in templates.
// By creating an instance of the Handlebars engine with specific configurations, you can tailor its behavior to suit the needs of your application. The hbs variable can then be used when configuring Express to set up Handlebars as the view engine, similar to what I explained in the previous response.

const hbs = exphbs.create({});

// ? End ----------------//

// Sets up the Express App
const app = express();

// Specify the port express will run on
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// ? Start Below -> app.use(express.static(path.join(__dirname, "public"))); --------------- ? //
// `app.use()`: middleware function that has access to (req) and (res) and the next middleware function in the application's request-response cycle
// `express.static()`: this is a built-in middleware function in express to serve static files, such as images, CSS files, and JavaScript files. It takes the root director from which to serve static assets.
// `path.join(__dirname, "public")`:`path.join`
// - is a Node.js method that joins all given path segments together.
// - In this case, it is used to create an absolute path to the "public" directory.
// - `__dirname` is a global variables in Node.js that represents the directory name of the current module (i.e., the directory where the current script resides)
// - `__dirname` is used to ensure that the path is absolute, regardless of the current working directory
// - `"public"` is the name of the directory containing the static files

// Putting it all together:
// - the `express.static()` middleware is configured to serve static files from the "public" directory
// - the entire middleware is registered using `app.use()`, which means it will be applied to all routes

// when a request is made for a static file (e.g. an image or a CSS file), express will look in the public directory and serve the file if it exists. This is a common practice for serving assets in web apps
// - Example: If you have an image called `logo.png` in the "public" directory, it can be accessed in the browser at `http://yourdomain.com/logo.png`
// - This middleware lets you serve static assets without having to create a specific route for each file

app.use(express.static(path.join(__dirname, "public")));

// ? End ----------------//

// ? Start Below -> app.use(require("./controllers/model1-routes"));----------- ? //
// Sets up the routes
// `require("./controllers/model1-routes")`: imports the module located at a specific path, defined in the "model1-routes" file
// `./controllers/model1-routes`: this assumes that the "model1-routes" file is located in the "controllers" directory and is named "model1-routes.js" or "model1-routes/index.js" if it is a directory
// `app.use()`: this is an express method used to mount middleware functions or routes at a specified path. In this context, it is being used to mount the routes from "model1-routes" controller onto the main Express app
// --- by using `app.use` with a router or a middleware, you are essentially saying, "use the provided router/middleware for any requests that match the specified path"

// Putting it all together:
// - the routes defined in "model1-routes" are encapsulated within a router or middleware object
// - `app.use()` is used to integrate these routes into your main express app
// - if, for example, the routes in "model1-routes" are defined to handle requests starting with `/model1`, then any request to paths starting with `/model1` will be handled by the routes defined in that file

app.use(require("./controllers/blog-routes"));
// ? End -------------------------------------- ? //

// ? Start -------------------------------------- ? //

// Sync sequelize models to the database, then turn on server
// In Sequelize, the `force` option in the `sync` method determines whether to drop existing tables and re-create them when syncing the Sequelize models with the database.
// `force: false` - when set `false` Sequelize won't drop any existing tables. It means that if the tables already exist in the database, Sequelize will try to update them according to the changes in your Sequelize model definitions without dropping nad recreating the tables

// Breakdown of the behavior based on the `force` option
// - `force: true` - if it sets `true`, Sequelize will drop the existing tables and re-create them according to the current model definitions. This can be useful during development or when you want to reset the database to a clean state, but be careful in a production environment as it will result in data loss
// - `force: false` - if it sets `false` (or not provided), Sequelize will attempt to alter the existing tables to match the current model definitions. It will add columns, modify data types, or make other change necessary, without dropping and recreating the entire table

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on: http://localhost:' +  ${PORT}`)
  );
});

// Eventually cookies will also be here in Activity 14
