const ExpressService = require("../../service/ExpressService");

class HealthCheck {
  static async backend(req, res) {
    return ExpressService.returnResponse(res, 200, "Backend service is up.");
  }

  static async websocket(req, res) {
    return ExpressService.returnResponse(res, 200, "Websocket service is up.");
  }
}

module.exports = HealthCheck;
