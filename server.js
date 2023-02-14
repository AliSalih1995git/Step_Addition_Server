const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
