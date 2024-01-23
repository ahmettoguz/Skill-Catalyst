const ExpressService = require("../../service/ExpressService");
const crud = require("../../database/crud/crud");

class UserType {
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

  // --------------------------------------------- Read
  static async getUserTypes(req, res) {
    // get user types from database
    const userTypes = await crud.userTypes.Read.getUserTypes();

    // check
    if (!userTypes.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(res, 200, "get user types success", {
      userTypes: userTypes.data,
    });
  }

  static async getUserType(req, res) {
    // get id from router parameter
    const id = req.params.id;

    // get user types from database
    const userType = await crud.userTypes.Read.getUserType(id);

    // check
    if (!userType.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(res, 200, "get user type success", {
      userType: userType.data,
    });
  }
}

module.exports = UserType;
