const sequelize = require("../config/databaseConnection");
const { Blog, User, Post } = require("../models");
const blogData = require("./blogData.json");
const postData = require("./postData.json");
const userData = require("./userData.json");
// The reason why we got this error:
// sqlMessage: "Field 'user_id' doesn't have a default value",
// sql: 'INSERT INTO `Blog` (`id`,`title`,`content`,`author`,`created_on`,`created_at`,`updated_at`)

// Solution, you need to add user_id

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  // Important! Create the User before Blog, because you need to have users before data...
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  // * Do I need to also await on User and Post?
  process.exit(0);
};

seedDatabase();

// try in the terminal -> node seed/seed
