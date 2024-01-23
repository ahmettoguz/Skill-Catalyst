const model = require("../../../model/model");

class Create {
  async insert(userType) {
    try {
      const insertObject = await model.UserType.create({
        type: userType.type,
      });

      // return inserted id
      const insertedId = insertObject._id.toString();
      return insertedId;
    } catch (error) {
      console.error("crud / user-type / crate / insert :", error);
      return null;
    }
  }
}

module.exports = Create;
