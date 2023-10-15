const sequelize = require("../config/databaseConnection");
const Blog = require("./models/Blog");
const blogData = require("./dish-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
