const LogService = require("../../../../service/LogService");
const model = require("../../../model/model");

class Create {
  static async insert(userType) {
    try {
      const insertObject = await model.UserType.create({
        type: userType.type,
      });

      // return inserted id
      const insertedId = insertObject._id.toString();
      return { state: true, insertedId };
    } catch (error) {
      const err = `crud / user-type / crate / insert : ${error}`;
      LogService.error(err);
      return { state: false, error: err };
    }
  }
}

module.exports = Create;
