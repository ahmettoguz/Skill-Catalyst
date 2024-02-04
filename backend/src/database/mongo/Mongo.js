const EnvService = require("../../service/EnvService");
const LogService = require("../../service/LogService");
const mongoose = require("mongoose");

class Mongo {
  static async connectDatabase() {
    mongoose.set("strictQuery", false);
    if (!EnvService.dbURI) {
      console.log("DB_URI is not defined in the environment variables.");
      return false;
    }

    try {
      await mongoose.connect(EnvService.dbURI);
      LogService.info("MongoDB connected successfully.");
    } catch (err) {
      //   console.error("Unable to connect to MongoDB: ", err);
      LogService.error("Unable to connect to MongoDB.");
    }
  }
}

module.exports = Mongo;
