const ExpressService = require("../../service/ExpressService");

class User {
  static async getUsers(req, res) {
    return ExpressService.returnResponse(res, 200, "users");
  }

  static async getUserAsParameter(req, res) {
    // get data form param from location
    const userId = req.params.id;

    return ExpressService.returnResponse(
      res,
      200,
      "get specific user with id:",
      userId
    );
  }

  static async getUserFromQueryString(req, res) {
    // get data form query string
    const userId = req.query.id;

    return ExpressService.returnResponse(
      res,
      200,
      "get specific user with id:",
      userId
    );
  }
}

module.exports = User;
