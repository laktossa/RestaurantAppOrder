const express = require("express");
const router = express.Router();
const Controller = require("../controller/order");

router.get("/menu", Controller.getMenu);
router.post("/order", Controller.addOrder);

module.exports = router;
