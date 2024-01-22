const mongoose = require("mongoose");

class Mongo {
  static async connectDatabase() {
    mongoose.set("strictQuery", false);
    if (!process.env.DB_URI) {
      console.log("DB_URI is not defined in the environment variables.");
      return false;
    }

    try {
      await mongoose.connect(process.env.DB_URI);
      console.info("✅ MongoDB connected successfully. ✅");
    } catch (err) {
      //   console.error("Unable to connect to MongoDB: ", err);
      console.error("❌ Unable to connect to MongoDB. ❌");
    }
  }
}

module.exports = Mongo;
