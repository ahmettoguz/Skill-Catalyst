const LogUtility = require("../../../../utility/LogUtility");
const model = require("../../../model/model");

class Update {
  static async updateOne(id, req) {
    try {
      // set filter and new attributes
      const filter = { _id: id };
      const newAttributes = { type: req.body.type };

      // update user
      await model.UserType.findOneAndUpdate(filter, newAttributes);

      // return state
      return { state: true };
    } catch (error) {
      LogUtility.error(error);
      return { state: false, error: error };
    }
  }

  static async updateMany(type, req) {
    try {
      // set filter and new attributes
      const filter = { type: type };
      const newAttributes = { type: req.body.newType };

      // update user
      const result = await model.UserType.updateMany(filter, newAttributes);

      // return state
      return { state: true, updatedCount: result.modifiedCount };
    } catch (error) {
      LogUtility.error(error);
      return { state: false, error: error };
    }
  }
}

module.exports = Update;
