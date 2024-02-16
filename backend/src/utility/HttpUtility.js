// import server
const http = require("http");

class HttpUtility {
  static getServer(app) {
    return http.createServer(app);
  }
}

module.exports = HttpUtility;
