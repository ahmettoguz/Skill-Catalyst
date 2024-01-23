const model = require("../../../model/model");

class Read {
  async getUserTypes() {
    try {
      const readObjects = await model.UserType.find({}).lean;

      // return found objects
      return readObjects;
    } catch (error) {
      console.error("crud / user-type / read / getUserType :", error);
      return null;
    }
  }

  async getUserType(id) {
    try {
      // lean does converting mongoose doc to js object
      const readObject = await model.UserType.findOne({ _id: id }).lean();

      // return found object
      return readObject;
    } catch (error) {
      console.error("crud / user-type / read / getUserType :", error);
      return null;
    }
  }
}

module.exports = Read;
