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

  // --------------------------------------------- Create
  static async addUser(req, res) {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
    };
    const addedId = 1;

    return ExpressService.returnResponse(
      res,
      200,
      "user is added successfully",
      {
        id: addedId,
      }
    );
  }
}

module.exports = User;
