const { Blog } = require("../models");

const blogData = [
  {
    id: 1,
    title: "Puppy Dog Eyes",
    content:
      "Remember to give your human some of the biggest, saddest eyes when you want attention.",
    author: "Momo",
    created_on: "10/17/2023",
  },
  {
    id: 2,
    title: "Puppy Parkour",
    content:
      "I learned how to put my paws on the wall. Human says that eventually, I'll learn how to jump off the walls! I wonder if I can do it at home to drive Human nuts.",
    author: "Mochi",
    created_on: "10/17/2023",
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
