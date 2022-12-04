const { sequelize } = require("../models");
const { queryInterface } = sequelize;
const request = require("supertest");
const app = require("../app");

beforeAll(async () => {
  await queryInterface.bulkInsert("Menus", [
    {
      name: "Big Mac",
      category: "burger",
      price: 30000,
      imageUrl:
        "https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/nhj93oZApoMavF1lC6Wm.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
});

afterAll(async () => {
  await queryInterface.bulkDelete("Menus", null, {});
});

describe("hit GET /menu", () => {
  test("hit GET /menu", () => {
    return request(app)
      .get("/menu")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
      });
  });
});
