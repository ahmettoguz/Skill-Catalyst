const ExpressService = require("../../service/ExpressService");
const AuthHelper = require("../../helper/auth/AuthHelper");

class Auth {
  static async login(req, res) {
    // check input validation
    const inputValidation = AuthHelper.validateLoginInput(req);
    if (!inputValidation.state)
      return ExpressService.returnResponse(
        res,
        400,
        "invalid input!",
        inputValidation.errors
      );

    try {
      // check username
      let foundUser = await db.User.findOne({
        userName: searchUser.userName,
      });

      if (foundUser === null)
        return HelperService.returnResponse(
          res,
          400,
          false,
          "Login operation is unsuccessful",
          ["No user with provided username."]
        );

      // check username and password
      foundUser = await db.User.findOne({
        userName: searchUser.userName,
        password: searchUser.password,
      });

      if (foundUser === null)
        return HelperService.returnResponse(
          res,
          400,
          false,
          "Login operation is unsuccessful",
          ["Wrong password provided."]
        );

      // generate jwt token for 1 day
      const jwtDieTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 1;
      const jwtToken = jwt.sign(
        {
          exp: jwtDieTime,
          data: {
            userId: foundUser._id.toString(),
          },
        },
        process.env.JWT_SECRET
      );

      // set token cookie for 1 day its not worked because we do not have secure connection (https) with different domain
      // const cookieDieTime = 1000 * 60 * 60 * 24 * 1;
      // res.cookie("accesstoken", `Bearer ${jwtToken}`, {
      //   maxAge: cookieDieTime,
      //   httpOnly: true,
      //   secure: true,
      //   sameSite: "None",
      // });
      // console.log("cookies: ", JSON.stringify(req.cookies));

      return HelperService.returnResponse(res, 200, true, "Login successful.", {
        Authorization: `Bearer ${jwtToken}`,
      });
    } catch (error) {
      return HelperService.returnResponse(
        res,
        500,
        false,
        "Internal server error for login operation."
      );
    }
    // ---
  }

  static async logout(req, res) {
    return ExpressService.returnResponse(res, 200, "logout");
  }
}

module.exports = Auth;
