const Sequelize = require("sequelize");

// Loads all the env variables into the process and places it in process.env
require("dotenv").config();

// create a connection object
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
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
