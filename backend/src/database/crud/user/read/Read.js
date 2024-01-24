const LogService = require("../../../../service/LogService");
const model = require("../../../model/model");

class Read {
  static async readUsers() {
    try {
      const count = await model.User.countDocuments();
      const readObjects = await model.User.find()
        .populate({ path: "user_type" })
        .lean();

      // return found objects
      return { state: true, data: { users: readObjects, count } };
    } catch (error) {
      LogService.error(error);
      return { state: false, error: error };
    }
  }

  static async readUsersLimited(sort, limit) {
    // convert sort
    sort = sort == "asc" ? 1 : -1;

    try {
      const readObjects = await model.User.find()
        .sort({ createdAt: sort })
        .limit(limit)
        .populate({ path: "user_type" })
        .lean();

      // return found objects
      return { state: true, data: readObjects };
    } catch (error) {
      LogService.error(error);
      return { state: false, error: error };
    }
  }

  static async readUserById(id) {
    try {
      // lean does converting mongoose doc to js object
      const readObject = await model.User.findOne({ _id: id }).populate({ path: "user_type" }).lean();

      // return found object
      return { state: true, data: readObject };
    } catch (error) {
      LogService.error(error);
      return { state: false, error: error };
    }
  }

  static async readUserBy(type) {
    try {
      // lean does converting mongoose doc to js object
      const readObject = await model.UserType.findOne({ type: type }).lean();

      // return found object
      return { state: true, data: readObject };
    } catch (error) {
      LogService.error(error);
      return { state: false, error: error };
    }
  }
}

module.exports = Read;
