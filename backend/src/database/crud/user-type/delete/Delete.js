const LogUtility = require("../../../../utility/LogUtility");
const model = require("../../../model/model");

class Delete {
  static async deleteOne(id) {
    try {
      // set filter
      const filter = { _id: id };

      // delete user type
      const deletedObject = await model.UserType.findOneAndDelete(filter);

      // return state
      return { state: true, deletedObject };
    } catch (error) {
      LogUtility.error(error);
      return { state: false, error: error };
    }
  }

  static async deleteMany(type) {
    try {
      // set filter
      const filter = { type: type };

      // delete user types
      const deletedObjects = await model.UserType.deleteMany(filter);

      // return state
      return {
        state: true,
        message: "user types delete suceess",
        deletedCount: deletedObjects.deletedCount,
      };
    } catch (error) {
      LogUtility.error(error);
      return { state: false, error: error };
    }
  }
}
module.exports = Delete;
