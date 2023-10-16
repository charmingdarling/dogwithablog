const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/databaseConnection");

class Blog extends Model {}

// * I have no idea what I'm doing here. I hope it is right.

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_titleEntry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogBodyEntry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = Blog;
