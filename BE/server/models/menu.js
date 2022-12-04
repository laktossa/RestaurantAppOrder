"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    static associate(models) {}
  }
  Menu.init(
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Menu",
    }
  );
  return Menu;
};
