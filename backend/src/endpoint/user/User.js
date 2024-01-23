const ExpressService = require("../../service/ExpressService");
const crud = require("../../database/crud/crud");

class User {
  // --------------------------------------------- Create
  static async createUser(req, res) {
    // get type with name and convert it to id, to insert with it
    const userType = req.body.type;
    const userTypeId = (await crud.userTypes.Read.getUserTypeByType(userType)).data._id;

    // create new object
    const newUser = {
      user_type: userTypeId,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    // insert new object
    const insertOperation = await crud.user.Create.create(newUser);

    // check insertion operation
    if (!insertOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(
      res,
      200,
      "user create success",
      { id: insertOperation.insertedId }
    );
  }

  // --------------------------------------------- Read
  static async readUsers(req, res) {
    // get user types from database
    const userTypes = await crud.userTypes.Read.getUserTypes();

    // check
    if (!userTypes.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(res, 200, "get user types success", {
      userTypes: userTypes.data.userTypes,
    });
  }

  static async readUsersLimited(req, res) {
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

  static async readUser(req, res) {
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
  static async updateUser(req, res) {
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

  static async updateUsers(req, res) {
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
  static async deleteUser(req, res) {
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

  static async deleteUsers(req, res) {
    // get type from post body
    const type = req.body.type;

    // delete user type from database
    const deleteOperation = await crud.userTypes.Delete.deleteMany(type);

    // check
    if (!deleteOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(
      res,
      200,
      "user type deletes success",
      {
        deletedCount: deleteOperation.deletedCount,
      }
    );
  }
}

module.exports = User;
