const LogService = require("../../../../service/LogService");
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
      const err = `crud / user-type / update / updateOne : ${error}`;
      LogService.error(err);
      return { state: false, error: err };
    }
  }
}

module.exports = Update;
