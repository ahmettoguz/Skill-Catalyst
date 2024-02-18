const ExpressUtility = require("../../utility/ExpressUtility");
const EncryptionUtility = require("../../utility/EncryptionUtility");
const AuthHelper = require("../../helper/auth/AuthHelper");
const crud = require("../../database/crud/crud");

class Auth {
  static async login(req, res) {
    // handle input
    const { isValid, errors: valErrors, input } = AuthHelper.handleInput(req);
    if (!isValid)
      return ExpressUtility.returnResponse(
        res,
        400,
        "invalid input!",
        valErrors
      );

    // read user by email
    const { state: readOperation, data: user } =
      await crud.user.Read.readUserByEmail(input.email);

    // check read operation and found user
    if (!readOperation || !user)
      return ExpressUtility.returnResponse(res, 400, "user not found!");

    // compare password
    const { state: isPasswordCorrect, errors: encErrors } =
      await EncryptionUtility.compareEncyrptedText(
        input.password,
        user.password
      );

    // check password
    if (!isPasswordCorrect)
      return ExpressUtility.returnResponse(res, 400, "incorrect password!");

    // crate jwt token
    const { state: jwtOperation, jwt } = EncryptionUtility.signJwt({
      id: user._id.toString(),
    });

    // check jwt operation
    if (!jwtOperation)
      return ExpressUtility.returnResponse(res, 500, "Internal server error!");

    // set jwt response to header
    res.setHeader("Authorization", jwt);

    // return response
    return ExpressUtility.returnResponse(res, 200, "login success", { jwt });
  }
}

module.exports = Auth;
