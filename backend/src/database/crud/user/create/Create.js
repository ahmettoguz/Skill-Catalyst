const model = require("../../../model/model");

class Create {
  async insert(user) {
    try {
      const insertObject = await model.Test.create({
        user_type: id,

        name: user.name,
        email: user.email,
        password: user.password,
        gender: user.gender,
      });

      // return inserted id
      const insertedId = insertObject._id.toString();
      return insertedId;
    } catch (error) {
      console.error("crud - user - crate - insert :", error);
      return null;
    }
  }
}

module.exports = Create;
