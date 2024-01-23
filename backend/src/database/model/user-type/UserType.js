const {Types, Schema, mongoose} = require("mongoose");

mongoose.pluralize(null);
const userTypeSchema = new Schema(
  {
    type: { type: String, required: true, lowercase: true },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("user-type", userTypeSchema);
