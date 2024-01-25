const UserHelper = require("../../helper/user/UserHelper");
const ExpressService = require("../../service/ExpressService");
const EncryptionService = require("../../service/EncryptionService");
const LogService = require("../../service/LogService");

const crud = require("../../database/crud/crud");

class User {
  // --------------------------------------------- Create
  static async createUser(req, res) {
    // get type with name and convert it to id, to insert with it
    const userTypeInput = req.body.type;
    const userType = await crud.userTypes.Read.readUserTypeByType(
      userTypeInput
    );

    // check user type
    if (!userType.data)
      return ExpressService.returnResponse(res, 400, "Invalid user type");

    // set user type
    const userTypeId = userType.data._id;

    // encrypt password
    const encyrptionOperation = await EncryptionService.encyrptText(
      req.body.password
    );

    // check encryption
    if (!encyrptionOperation.state)
      return ExpressService.returnResponse(res, 500, "Internal server error!");

    // create new object
    const newUser = {
      user_type: userTypeId,
      name: req.body.name,
      email: req.body.email,
      password: encyrptionOperation.hash,
      gender: req.body.gender,
    };

    // insert new object
    const insertOperation = await crud.user.Create.create(newUser);

    // check insertion operation
    if (!insertOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    return ExpressService.returnResponse(res, 200, "user create success", {
      id: insertOperation.insertedId,
    });
  }

  // --------------------------------------------- Read
  static async readUsers(req, res) {
    // get users from database
    const users = await crud.user.Read.readUsers();

    // check read operation
    if (!users.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    // arrange data format
    UserHelper.arrangeDatas(users.data.users);

    // return response
    return ExpressService.returnResponse(
      res,
      200,
      "read users success",
      users.data
    );
  }

  static async readUsersLimited(req, res) {
    // get variables from query string
    const sort = req.query.sort;
    const limit = req.query.limit;

    // get users from database
    const users = await crud.user.Read.readUsersLimited(sort, limit);

    // check
    if (!users.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    // arrange data format
    UserHelper.arrangeDatas(users.data);

    return ExpressService.returnResponse(
      res,
      200,
      "read limited users success",
      {
        users: users.data,
        count: users.data.length,
      }
    );
  }

  static async readUsersInRange(req, res) {
    // get variables from query string ?sort=asc&startRange=2&endRange=3
    const sort = req.query.sort;
    const startRange = req.query.startRange;
    const endRange = req.query.endRange;

    // check input
    if (startRange >= endRange || startRange < 0 || endRange < 0)
      return ExpressService.returnResponse(
        res,
        400,
        "Invalid range specification!"
      );

    // get users from database
    const users = await crud.user.Read.readUsersInRange(
      sort,
      startRange,
      endRange
    );

    // check
    if (!users.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    // arrange data format
    UserHelper.arrangeDatas(users.data);

    return ExpressService.returnResponse(
      res,
      200,
      "read in range users success",
      {
        users: users.data,
        count: users.data.length,
      }
    );
  }

  static async readUserById(req, res) {
    // get id from router parameter
    const id = req.params.id;

    // get user from database
    const user = await crud.user.Read.readUserById(id);

    // check
    if (!user.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    // arrange data format
    UserHelper.arrangeData(user.data);

    return ExpressService.returnResponse(res, 200, "read user success", {
      user: user,
    });
  }

  // --------------------------------------------- Update
  static async updateUser(req, res) {
    // get values from post body
    const id = req.body.id;

    // convert type from name to id
    const userTypeInput = req.body.user_type;
    const userType = await crud.userTypes.Read.readUserTypeByType(
      userTypeInput
    );

    // check user type
    if (!userType.data)
      return ExpressService.returnResponse(res, 400, "Invalid user type");

    // set user type
    const userTypeId = userType.data._id;

    const newValues = {
      user_type: userTypeId,

      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
    };

    // update user type from database
    const updateOperation = await crud.user.Update.updateUserById(
      id,
      newValues
    );

    // check
    if (!updateOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    // check
    if (!updateOperation.updateOperation) {
      return ExpressService.returnResponse(
        res,
        400,
        "No user found with that specification!"
      );
    }

    return ExpressService.returnResponse(res, 200, "user update success");
  }

  static async updateUsers(req, res) {
    // set filter and new values
    const filter = {
      gender: req.body.filterGender,
    };
    const newValues = {
      gender: req.body.newGender,
    };

    // update user type from database
    const updateOperation = await crud.user.Update.updateUsers(
      filter,
      newValues
    );

    // check
    if (!updateOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    // check
    if (updateOperation.updatedCount == 0)
      return ExpressService.returnResponse(
        res,
        400,
        "No user with that specifications!"
      );

    return ExpressService.returnResponse(res, 200, "user updates success", {
      updatedCount: updateOperation.updatedCount,
    });
  }

  // --------------------------------------------- Delete
  static async deleteUser(req, res) {
    // get id from post body
    const id = req.body.id;

    // delete user from database
    const deleteOperation = await crud.user.Delete.deleteOne(id);

    // check
    if (!deleteOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    // check
    if (!deleteOperation.deletedObject) {
      return ExpressService.returnResponse(res, 400, "No user with that id!");
    }

    // arrange data format
    UserHelper.arrangeData(deleteOperation.deletedObject);

    // maybe just return the delete status instead of whole info because you need to handle relations.
    return ExpressService.returnResponse(res, 200, "user delete success", {
      // deletedObject: deleteOperation.deletedObject,
      state: true,
    });
  }

  static async deleteUsers(req, res) {
    // get gender from post body and set filter
    const filter = {
      gender: req.body.gender,
    };

    // delete users from database
    const deleteOperation = await crud.user.Delete.deleteMany(filter);

    // check
    if (!deleteOperation.state) {
      return ExpressService.returnResponse(res, 500, "Internal server error!");
    }

    // check
    if (deleteOperation.deletedCount == 0)
      return ExpressService.returnResponse(
        res,
        400,
        "No user with that specifications!"
      );

    return ExpressService.returnResponse(res, 200, "user deletes success", {
      deletedCount: deleteOperation.deletedCount,
    });
  }
}

module.exports = User;
