const LogService = require("../../../../service/LogService");
const model = require("../../../model/model");

class Create {
  static async create(user) {
    try {
      const insertObject = await model.User.create(user);

      // return inserted id
      const insertedId = insertObject._id.toString();
      return { state: true, insertedId };
    } catch (error) {
      LogService.error(error);
      return { state: false, error: error };
    }
  }
}

module.exports = Create;
