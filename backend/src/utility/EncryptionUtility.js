const LogUtility = require("../utility/LogUtility");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const EnvUtility = require("../utility/EnvUtility");

class EncryptionUtility {
  static async encyrptText(text) {
    // convert to string
    text = text + "";

    // hash with bcrypt
    try {
      const hash = await bcrypt.hash(text, 10);
      return { state: true, hash };
    } catch (error) {
      LogUtility.error(error);
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
      LogUtility.error(error);
      return { state: false, error };
    }
  }

  static signJwt(data) {
    try {
      // generate jwt token for 1 day
      const jwtDieTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 1;
      const jwtToken = jwt.sign(
        { exp: jwtDieTime, data },
        EnvUtility.jwtSecret
      );

      return { state: true, jwt: `Bearer ${jwtToken}` };
    } catch (error) {
      LogUtility.error(error);
      return { state: false, error };
    }
  }

  static validateJwt(jwtToken) {
    try {
      const decoded = jwt.verify(jwtToken, EnvUtility.jwtSecret);
      return { state: true, data: decoded };
    } catch (error) {
      LogUtility.error(error);
      return { state: false, error };
    }
  }
}

module.exports = EncryptionUtility;
