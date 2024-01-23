const ExpressService = require("../../service/ExpressService");
const crud = require("../../database/crud/crud");

class UserType {
  static async getUserTypes(req, res) {
    // get user types from database
    const users = await crud.userTypes.Read.getUserTypes();

    // check
    if (!users.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(res, 200, "get user types", {
      userTypes: users.data,
    });
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
  static async createUserType(req, res) {
    // create new object
    const newUserType = {
      type: req.body.type,
    };

    // insert new object
    const insertOperation = await crud.userTypes.Create.insert(newUserType);

    // check insertion operation
    if (!insertOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(
      res,
      200,
      "user type is crated successfully",
      { id: insertOperation.insertedId }
    );
  }
}

module.exports = UserType;
