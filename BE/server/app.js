const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const router = require("../server/routes/router");

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
