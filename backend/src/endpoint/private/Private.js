const ExpressUtility = require("../../utility/ExpressUtility");

class Private {
  static async privateMentee(req, res) {
    const mentee = req.data;

    return ExpressUtility.returnResponse(res, 200, "private mentee", mentee);
  }
  static async privateMentor(req, res) {
    const mentor = req.data;

    return ExpressUtility.returnResponse(res, 200, "private mentor", mentor);
  }
}

module.exports = Private;
