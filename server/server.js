const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

app.listen(port, () => {
  connect();
  console.log(`Server started on port ${port}`);
});
