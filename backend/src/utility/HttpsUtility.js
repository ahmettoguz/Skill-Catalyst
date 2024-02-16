const https = require("https");
const FileUtility = require("./FileUtility");
const LogUtility = require("./LogUtility");

class HttpsUtility {
  static getCredentials() {
    const certificate = FileUtility.readFile(["../keys", "fullchain.pem"]);
    const privateKey = FileUtility.readFile(["../keys", "privkey.pem"]);
    if (privateKey && certificate)
      return { key: privateKey, cert: certificate };

      LogUtility.error("SSL files cannot read.");
    return false;
  }

  static getServer(app) {
    return https.createServer(this.getCredentials(), app);
  }
}

module.exports = HttpsUtility;
