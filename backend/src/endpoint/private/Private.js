const ExpressService = require("../../service/ExpressService");

class Private {
  static async privateMentee(req, res) {
    const mentee = req.data;

    return ExpressService.returnResponse(res, 200, "private mentee", mentee);
  }
  static async privateMentor(req, res) {
    return ExpressService.returnResponse(res, 200, "private mentor");
  }
}

module.exports = Private;
