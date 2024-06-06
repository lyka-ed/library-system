const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server is listening at this ${PORT}`);
});
