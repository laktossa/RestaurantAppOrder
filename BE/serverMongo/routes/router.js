const express = require("express");
const Controller = require("../controller/order");
const router = express.Router();

router.post("/order", Controller.create);

module.exports = router;
