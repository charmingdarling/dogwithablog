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

// Middleware to parse incoming requests
app.use(express.static(path.join(__dirname, "public")));

//Sets up the routes
app.use(require("./controllers/dish-routes"));

// Sync sequelize models to the database, then turn on server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});

// Eventually cookies will also be here in Activity 14
