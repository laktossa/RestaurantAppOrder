const { getDatabase } = require("../config/connection");

const coll = "orderdetail";

class Order {
  static order() {
    const db = getDatabase();
    const order = db.collection(coll);
    return order;
  }

  static async create(obj) {
    try {
      const order = this.order();
      const data = await order.insertOne(obj);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async findAll() {
    try {
      const order = this.orders();

      const data = await order.find({}, { projection: { password } }).toArray();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Order;
