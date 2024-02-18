const ExpressUtility = require("../../utility/ExpressUtility");

class HealthCheck {
  static async backend(req, res) {
    return ExpressUtility.returnResponse(res, 200, "Backend service is up.");
  }

  static async websocket(req, res) {
    return ExpressUtility.returnResponse(res, 200, "Websocket service is up.");
  }
}

module.exports = HealthCheck;
