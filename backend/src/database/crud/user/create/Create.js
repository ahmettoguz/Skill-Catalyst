const model = require("../../../model/model");

class Create {
  async insert(id, user) {
    
    try {
      const newTest = await model.Test.create({
        name: testName,
        finishedAt: "null",
        user: userId,
        virtualUser: virtualUser,
        status: "null",
        state: "initial",
      });
      const insertedId = newTest._id.toString();
      return insertedId;
    } catch (error) {
      console.error("insertTest: ", error);
      return null;
    }
  }
}

module.exports = Create;
