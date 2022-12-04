"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data/data.json");
    data.forEach((e) => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Menus", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Menus", null, {});
  },
};
