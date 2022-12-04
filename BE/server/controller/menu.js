const { Menu } = require("../models/index");

class Controller {
  static menuList = async (req, res, next) => {
    try {
      let data = await Menu.findAll();
      res.status(200).json(data);
    } catch (error) {
      //   next(error);
      console.log(error);
    }
  };
}

module.exports = Controller;
