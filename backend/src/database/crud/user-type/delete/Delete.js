const LogService = require("../../../../service/LogService");
const model = require("../../../model/model");

class Delete {
  static async deleteOne(id) {
    try {
      // set filter
      const filter = { _id: id };

      // delete user
      const deletedObject = await model.UserType.findOneAndDelete(filter);

      // return state
      return { state: true, deletedObject };
    } catch (error) {
      const err = `crud / user-type / delete / deleteOne : ${error}`;
      LogService.error(err);
      return { state: false, error: err };
    }
  }
}
module.exports = Delete;
