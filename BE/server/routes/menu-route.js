const express = require("express");
const Controller = require("../controller/menu");
const router = express.Router();

router.get("/menu", Controller.menuList);

module.exports = router;
