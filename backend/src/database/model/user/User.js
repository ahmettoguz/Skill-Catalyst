const mongoose = require("mongoose");

mongoose.pluralize(null);
const userSchema = new mongoose.Schema(
  {
    user_type: { type: Types.ObjectId, ref: "user-type", required: true },

    name: { type: String, required: true, lowercase: true },
    email: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
    gender: { type: String, required: true, enum: ["female", "male", "none"], default: "none" },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
