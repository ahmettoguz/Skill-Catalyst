const LogService = require("../../../../service/LogService");
const model = require("../../../model/model");

class Read {
  static async readUserTypes() {
    try {
      const count = await model.UserType.countDocuments();
      const readObjects = await model.UserType.find().lean();

      // return found objects
      return { state: true, data: { userTypes: readObjects, count } };
    } catch (error) {
      LogService.error(error);
      return { state: false, error: error };
    }
  }

  static async readUserTypeById(id) {
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

  static async readUserTypeByType(type) {
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
