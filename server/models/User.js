const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, default: "" },
    username: { type: String, require: true, unique: true, min: 3, max: 20 },
    email: { type: String, require: true, unique: true, max: 50 },
    password: { type: String, require: true, min: 3, max: 20 },
    bio: { type: String, min: 3, max: 50, default: "" },
    profilePicture: { type: String, default: "" },
    followers: { type: Array, default: [] },
    following: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
