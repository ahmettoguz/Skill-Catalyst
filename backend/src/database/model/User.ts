const mongoose = require("mongoose");

mongoose.pluralize(null);
const userSchema = new mongoose.Schema(
  {
    // _id: mongoose.Types.ObjectId, 
    name: String,
    age: Number,
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

// const User: Model<IUser> = model<IUser>("User", userSchema);

// export default User;

// userName: { type: String, lowercase: true, required: true },
// firstName: { type: String, required: true },
// lastName: { type: String, required: true },
// phone: { type: String, required: true },
// email: { type: String, lowercase: true, required: true },
// password: { type: String, required: true },
// testCredit: { type: Number },
// profilePicture: { type: Number, default: 0 },
// profileBanner: { type: Number, default: 0 },
// accountStatus: {
//   type: String,
//   enum: ["active", "inactive", "deactivated", "banned"],
//   default: "active",
// },
// role: { type: String, enum: ["user", "admin"], default: "user" },
// tier: { type: Types.ObjectId, ref: "Tier", required: true },
