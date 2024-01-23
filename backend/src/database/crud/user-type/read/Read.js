const LogService = require("../../../../service/LogService");
const model = require("../../../model/model");

class Read {
  static async getUserTypes() {
    try {
      const count = await model.UserType.countDocuments();
      const readObjects = await model.UserType.find().lean();

      // return found objects
      return { state: true, data: { userTypes: readObjects, count } };
    } catch (error) {
      const err = `crud / user-type / read / getUserTypes : ${error}`;
      LogService.error(err);
      return { state: false, error: err };
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
      const err = `crud / user-type / read / getUserTypesLimited : ${error}`;
      LogService.error(err);
      return { state: false, error: err };
    }
  }

  static async getUserType(id) {
    try {
      // lean does converting mongoose doc to js object
      const readObject = await model.UserType.findOne({ _id: id }).lean();

      // return found object
      return { state: true, data: readObject };
    } catch (error) {
      const err = `crud / user-type / read / getUserType : ${error}`;
      LogService.error(err);
      return { state: false, error: err };
    }
  }
}

module.exports = Read;
