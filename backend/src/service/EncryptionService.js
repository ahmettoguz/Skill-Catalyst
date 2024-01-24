const LogService = require("./LogService");
const bcrypt = require("bcrypt");

class EncryptionService {
  static async encyrptText(text) {
    // convert to string
    text = text + "";

    // hash with bcrypt
    try {
      const hash = await bcrypt.hash(text, 10);
      return { state: true, hash };
    } catch (error) {
      LogService.error(error);
      return { state: false, error };
    }
  }
}

module.exports = EncryptionService;
