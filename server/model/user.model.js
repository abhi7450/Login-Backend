const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, trim: true, required: [true, "Name is required"] },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please enter a vaild email address"],
    required: [true, "Email is required"],
  },
  password: { type: String, require: [true, "Password is required"] },
  created: { type: Date, default: Date.now },
  updated: { type: Date },
});

// model
const User = mongoose.model("User", UserSchema);
module.exports = User;
