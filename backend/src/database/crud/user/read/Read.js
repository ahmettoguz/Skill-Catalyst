const LogService = require("../../../../service/LogService");
const model = require("../../../model/model");

class Read {
  static async getUsers() {
    try {
      const count = await model.User.countDocuments();
      const readObjects = await model.User.find().lean();

      // return found objects
      return { state: true, data: { users: readObjects, count } };
    } catch (error) {
      LogService.error(error);
      return { state: false, error: error };
    }
  }

  static async getUserTypesLimited(sort, limit) {
    // convert sort
    sort = sort == "asc" ? 1 : -1;

    try {
      const readObjects = await model.UserType.find()
        .sort({ createdAt: sort })
        .limit(limit)
        .lean();

      // return found objects
      return { state: true, data: readObjects };
    } catch (error) {
      LogService.error(error);
      return { state: false, error: error };
    }
  }

  static async getUserType(id) {
    console.log("buraya geldi");
    try {
      // lean does converting mongoose doc to js object
      const readObject = await model.UserType.findOne({ _id: id }).lean();

      // return found object
      return { state: true, data: readObject };
    } catch (error) {
      LogService.error(error);
      return { state: false, error: error };
    }
  }

  static async getUserTypeByType(type) {
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
