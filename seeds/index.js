const sequelize = require("../config/databaseConnection");
const { Blog, User, Post } = require("../models/");
const blogData = require("./blogData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();

// try in the terminal -> node seed/index
