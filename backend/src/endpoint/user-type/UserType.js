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

  static async getUserTypesLimited(req, res) {
    // get variables from query string
    const sort = req.query.sort;
    const limit = req.query.limit;

    // get user types from database
    const userTypes = await crud.userTypes.Read.getUserTypesLimited(
      sort,
      limit
    );

    // check
    if (!userTypes.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(
      res,
      200,
      "get limited user types success",
      {
        userTypes: userTypes.data,
      }
    );
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

  // --------------------------------------------- Update
  static async updateUserType(req, res) {
    // get id from post body
    const id = req.body.id;

    // get user types from database
    const updateOperation = await crud.userTypes.Update.updateOne(id, req);

    // check
    if (!updateOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(res, 200, "user update success");
  }
}

module.exports = UserType;
