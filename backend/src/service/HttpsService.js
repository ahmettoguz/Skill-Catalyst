const https = require("https");
const FileService = require("./FileService");
const LogService = require("./LogService");

class HttpsService {
  static getCredentials() {
    const certificate = FileService.readFile(["../keys", "fullchain.pem"]);
    const privateKey = FileService.readFile(["../keys", "privkey.pem"]);
    if (privateKey && certificate)
      return { key: privateKey, cert: certificate };

    LogService.error("SSL files cannot read.");
    return false;
  }

  static getServer(app) {
    return https.createServer(this.getCredentials(), app);
  }
}

module.exports = HttpsService;
