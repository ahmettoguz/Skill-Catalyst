const EncryptionService = require("../service/EncryptionService");
const ExpressService = require("../service/ExpressService");

function handleAuthorizationHeader(jwt) {
  // check header
  if (!jwt || !jwt.startsWith("Bearer "))
    return { state: false, error: "invalid token" };

  // seperate token
  jwt = jwt.split(" ")[1];

  return { state: true, jwt };
}

function validateAll(req, res) {
  // handle authorization header
  const { state: headerState, jwt } = handleAuthorizationHeader(
    req.headers.authorization
  );

  // check authorization header
  if (!headerState)
    return ExpressService.returnResponse(
      res,
      400,
      "authorization header missing!"
    );

  // check jwt validity
  const { state: jwtValidityState, error: jwtValidityError } =
    EncryptionService.validateJwt(jwt);

  if (!jwtValidityState)
    return ExpressService.returnResponse(res, 400, "invalid jwt!", {
      error: jwtValidityError,
    });

  return true;
}

class Middleware {
  static authenticateMentee(req, res, next) {
    // make jwt authorization header validation and jwt validation
    if (!validateAll(req, res)) return;

    next();
  }
}

module.exports = Middleware;
