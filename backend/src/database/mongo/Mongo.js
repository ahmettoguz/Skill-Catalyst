const LogUtility = require("../../utility/LogUtility");
const EnvUtility = require("../../utility/EnvUtility");
const mongoose = require("mongoose");

class Mongo {
  static async connectDatabase() {
    mongoose.set("strictQuery", false);
    if (!EnvUtility.dbURI) {
      console.log("DB_URI is not defined in the environment variables.");
      return false;
    }

    try {
      await mongoose.connect(EnvUtility.dbURI);
      LogUtility.info("MongoDB connected successfully.");
    } catch (err) {
      //   console.error("Unable to connect to MongoDB: ", err);
      LogUtility.error("Unable to connect to MongoDB.");
    }
  }
}

module.exports = Mongo;
