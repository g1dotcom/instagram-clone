// Description: This is the main server file
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

// Routes
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/users.js");
const postRoutes = require("./routes/posts.js");
const conversationRoutes = require("./routes/conversation.js");
const messageRoutes = require("./routes/messages.js");

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
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully");
  } catch (error) {
    console.log(error);
  }
});

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/conversations", conversationRoutes);
app.use("/messages", messageRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server started on port ${port}`);
});
