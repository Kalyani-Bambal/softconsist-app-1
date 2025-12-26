const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", require("./routes/products"));

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});

