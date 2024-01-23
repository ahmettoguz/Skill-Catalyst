const ExpressService = require("../../service/ExpressService");

class Test {
  static async test(req, res) {
    return ExpressService.returnResponse(res, 200, "test");
  }
}

module.exports = Test;
