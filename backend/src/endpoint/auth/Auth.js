const ExpressService = require("../../service/ExpressService");

class Auth {
  static async login(req, res) {
    return ExpressService.returnResponse(res, 200, "login");
  }

  static async logout(req, res) {
    return ExpressService.returnResponse(res, 200, "logout");
  }
}

module.exports = Auth;
