const LogService = require("./LogService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const EnvService = require("./EnvService");

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

  static async compareEncyrptedText(plainText, hashedText) {
    try {
      const operation = await bcrypt.compare(plainText, hashedText);

      // text didn't match
      if (!operation) return { state: false, error: "not match" };

      return { state: true };
    } catch (error) {
      LogService.error(error);
      return { state: false, error };
    }
  }

  static signJwt(data) {
    try {
      // generate jwt token for 1 day
      const jwtDieTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 1;
      const jwtToken = jwt.sign(
        { exp: jwtDieTime, data },
        EnvService.jwtSecret
      );

      return { state: true, jwt: `Bearer ${jwtToken}` };
    } catch (error) {
      LogService.error(error);
      return { state: false, error };
    }
  }

  static validateJwt(jwtToken) {
    try {
      const decoded = jwt.verify(jwtToken, EnvService.jwtSecret);
      return { state: true, data: decoded };
    } catch (error) {
      LogService.error(error);
      return { state: false, error };
    }
  }
}

module.exports = EncryptionService;
