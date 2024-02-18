const LogUtility = require("../../../../utility/LogUtility");
const model = require("../../../model/model");

class Delete {
  static async deleteOne(id) {
    try {
      // set filter
      const filter = { _id: id };

      // delete user
      const deletedObject = await model.User.findOneAndDelete(filter).lean();

      // return state
      return { state: true, deletedObject };
    } catch (error) {
      LogUtility.error(error);
      return { state: false, error: error };
    }
  }

  static async deleteMany(filter) {
    try {
      // delete users
      const deletedObjects = await model.User.deleteMany(filter).lean();

      // return state
      return {
        state: true,
        message: "user deletes suceess",
        deletedCount: deletedObjects.deletedCount,
      };
    } catch (error) {
      LogUtility.error(error);
      return { state: false, error: error };
    }
  }
}
module.exports = Delete;
