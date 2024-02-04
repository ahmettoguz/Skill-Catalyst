// import server
const http = require("http");

class HttpService {
  static getServer(app) {
    return http.createServer(app);
  }
}

module.exports = HttpService;
