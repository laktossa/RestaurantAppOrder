const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const router = require("./routes/router");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
