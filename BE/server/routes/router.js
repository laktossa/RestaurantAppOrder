const express = require("express");
const router = express.Router();
const menuRouter = require("./menu-route");

router.use("/", menuRouter);

module.exports = router;
