const ExpressService = require("../../service/ExpressService");

class Private {
  static async privateMentee(req, res) {
    return ExpressService.returnResponse(res, 200, "private mentee");
  }
  static async privateMentor(req, res) {
    return ExpressService.returnResponse(res, 200, "private mentor");
  }
}

module.exports = Private;
