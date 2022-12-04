const axios = require("axios");
const redis = require("../config/redis-connection");

const menuURL = "http://localhost:3001";
const orderURL = "http://localhost:3002";

class Controller {
  static getMenu = async (req, res) => {
    console.log("masuk ocr");
    try {
      let cache = await redis.get(`cache:user`);
      if (cache) {
        const data = JSON.parse(cache);
        res.status(200).json(data);
      } else {
        let { data } = await axios.get(`${menuURL}/menu`);
        await redis.set(`cache:menu`, JSON.stringify(data));
        res.status(200).json(data);
      }
      // let { data } = await axios.get(`${menuURL}/menu`);
      // res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  static addOrder = async (req, res) => {
    let data = req.body;
    try {
      await axios.post(`${orderURL}/order`, data);
      res.status(200).json("Success");
    } catch (error) {
      res.status(500).json(error);
    }
  };
}

module.exports = Controller;
