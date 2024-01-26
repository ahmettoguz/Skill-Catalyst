const ExpressService = require("../../service/ExpressService");
const EncryptionService = require("../../service/EncryptionService");
const AuthHelper = require("../../helper/auth/AuthHelper");
const crud = require("../../database/crud/crud");

class Auth {
  static async login(req, res) {
    // handle input
    const { isValid, errors: valErrors, input } = AuthHelper.handleInput(req);
    if (!isValid)
      return ExpressService.returnResponse(
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
      return ExpressService.returnResponse(res, 400, "user not found!");

    // compare password
    const { state: isPasswordCorrect, errors: encErrors } =
      await EncryptionService.compareEncyrptedText(
        input.password,
        user.password
      );

    // check password
    if (!isPasswordCorrect)
      return ExpressService.returnResponse(res, 400, "incorrect password!");

    // crate jwt token
    const { state: jwtOperation, jwt } = EncryptionService.signJwt({
      id: user._id.toString(),
    });

    // check jwt operation
    if (!jwtOperation)
      return ExpressService.returnResponse(res, 500, "Internal server error!");

    // set jwt response to header
    res.setHeader("Authorization", jwt);

    // return response
    return ExpressService.returnResponse(res, 200, "login success", { jwt });
  }
}

module.exports = Auth;
