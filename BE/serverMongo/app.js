const express = require("express");
const app = express();
const PORT = 3002;
const connection = require("./config/connection");
const router = require("../serverMongo/routes/router");

app.use(express.urlencoded({ extended: true }));

app.use("/", router);

connection.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
