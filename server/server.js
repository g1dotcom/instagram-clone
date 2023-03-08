const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.js");
const morgan = require("morgan");

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

// Middleware
app.use(express.json());
app.use(morgan("common"));

// Routes
app.use("/auth", authRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server started on port ${port}`);
});
