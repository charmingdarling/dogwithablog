// Importing Sequelize library, which is an ORM library for node designed to work with relational databases
// Once you have imported Sequelize, you can use it to define models, interact with databases, perform CRUD operations, etc.

const Sequelize = require("sequelize");

// Loads all the env variables into the process and places it in process.env
require("dotenv").config();

// Creating a Sequelize instance and define a database connection
const sequelize = new Sequelize(
  // database name
  process.env.DB_NAME,
  // user
  process.env.DB_USER,
  // password
  process.env.DB_PASSWORD,
  // database location
  {
    host: "localhost",
    // or 'postgres', 'sqlite', etc
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
