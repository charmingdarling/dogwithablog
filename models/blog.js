const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/databaseConnection");

class Blog extends Model {}

// * I have no idea what I'm doing here. I hope it is right.

Blog.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_titleEntry: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    blogBodyEntry: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    author: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelname: "blog",
  }
);

module.exports = Blog;
