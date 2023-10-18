const { User } = require("../models");

const userData = [
  {
    username: "MaxineTheCorgi",
    email: "maxine@littlechonk.com",
    password: "woof", //! I know I shouldn't have their password in here. bcrypt stuff?
  },
  {
    username: "WhatAboutBunny",
    email: "bunny@buttons.com",
    password: "woof",
  },
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
