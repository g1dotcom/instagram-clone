// Description: This is the main server file
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Routes
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/users.js");
const postRoutes = require("./routes/posts.js");

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
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server started on port ${port}`);
});
