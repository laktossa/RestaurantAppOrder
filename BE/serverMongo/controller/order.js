const Order = require("../models/orderDetail");

class Controller {
  static async create(req, res, next) {
    try {
      let data = req.body;
      await Order.create(data);
      res.status(201).json("Successfully created");
    } catch (error) {
      console.log(error);
    }
  }

  static async findAll(req, res, next) {
    try {
      let data = await Order.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
