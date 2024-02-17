const LogUtility = require("../../../../utility/LogUtility");
const model = require("../../../model/model");

class Create {
  static async create(userType) {
    try {
      const insertObject = await model.UserType.create({
        type: userType.type,
      });

      // return inserted id
      const insertedId = insertObject._id.toString();
      return { state: true, insertedId };
    } catch (error) {
      LogUtility.error(error);
      return { state: false, error: error };
    }
  }
}

module.exports = Create;
