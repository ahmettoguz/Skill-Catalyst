const ExpressUtility = require("../../utility/ExpressUtility");

class Test {
  static async test(req, res) {
    return ExpressUtility.returnResponse(res, 200, "test");
  }
}

module.exports = Test;
