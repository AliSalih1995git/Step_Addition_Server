const express = require("express");
const cors = require("cors");
const additionRoute = require("./routes/addition");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", additionRoute);

const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
