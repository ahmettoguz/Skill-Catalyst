const LogService = require("../../../../service/LogService");
const model = require("../../../model/model");

class Update {
  static async updateUserById(id, newValues) {
    try {
      // set filter and new attributes
      const filter = { _id: id };
      const newAttributes = {
        user_type: newValues.user_type,

        name: newValues.name,
        email: newValues.email,
        password: newValues.password,
        gender: newValues.gender,
      };

      // update user
      await model.User.findOneAndUpdate(filter, newAttributes);

      // return state
      return { state: true };
    } catch (error) {
      LogService.error(error);
      return { state: false, error: error };
    }
  }

  static async updateUsers(filter, newValues) {
    try {
      // update user
      const updateOperation = await model.User.updateMany(filter, newValues);

      // return state
      return { state: true, updatedCount: updateOperation.modifiedCount };
    } catch (error) {
      LogService.error(error);
      return { state: false, error: error };
    }
  }
}

module.exports = Update;
