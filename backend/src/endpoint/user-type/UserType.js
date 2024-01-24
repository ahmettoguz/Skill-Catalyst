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
    const insertOperation = await crud.userTypes.Create.create(newUserType);

    // check insertion operation
    if (!insertOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(
      res,
      200,
      "user type create success",
      { id: insertOperation.insertedId }
    );
  }

  // --------------------------------------------- Read
  static async readUserTypes(req, res) {
    // get user types from database
    const userTypes = await crud.userTypes.Read.readUserTypes();

    // check
    if (!userTypes.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(res, 200, "read user types success", {
      userTypes: userTypes.data.userTypes,
    });
  }

  static async readUserTypesLimited(req, res) {
    // get variables from query string
    const sort = req.query.sort;
    const limit = req.query.limit;

    // get user types from database
    const userTypes = await crud.userTypes.Read.readUserTypesLimited(
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
      "read limited user types success",
      {
        userTypes: userTypes.data,
      }
    );
  }

  static async readUserType(req, res) {
    // get id from router parameter
    const id = req.params.id;

    // get user types from database
    const userType = await crud.userTypes.Read.readUserType(id);

    // check
    if (!userType.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(res, 200, "read user type success", {
      userType: userType.data,
    });
  }

  // --------------------------------------------- Update
  static async updateUserType(req, res) {
    // get id from post body
    const id = req.body.id;

    // update user type from database
    const updateOperation = await crud.userTypes.Update.updateOne(id, req);

    // check
    if (!updateOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(res, 200, "user type update success");
  }

  static async updateUserTypes(req, res) {
    // get type from post body
    const type = req.body.type;

    // update user types from database
    const updateOperation = await crud.userTypes.Update.updateMany(type, req);

    // check
    if (!updateOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(
      res,
      200,
      "user type updates success",
      {
        updatedCount: updateOperation.updatedCount,
      }
    );
  }

  // --------------------------------------------- Delete
  static async deleteUserType(req, res) {
    // get id from post body
    const id = req.body.id;

    // delete user type from database
    const deleteOperation = await crud.userTypes.Delete.deleteOne(id);

    // check
    if (!deleteOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(res, 200, "user type delete success", {
      deletedObject: deleteOperation.deletedObject,
    });
  }

  static async deleteUserTypes(req, res) {
    // get type from post body
    const type = req.body.type;

    // delete user type from database
    const deleteOperation = await crud.userTypes.Delete.deleteMany(type);

    // check
    if (!deleteOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(res, 200, "user type deletes success", {
      deletedCount: deleteOperation.deletedCount,
    });
  }
}

module.exports = UserType;
