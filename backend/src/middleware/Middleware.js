const EncryptionService = require("../service/EncryptionService");
const ExpressService = require("../service/ExpressService");
const UserHelper = require("../helper/user/UserHelper");
const crud = require("../database/crud/crud");

function handleAuthorizationHeader(jwt) {
  // check header
  if (!jwt || !jwt.startsWith("Bearer "))
    return { state: false, error: "invalid token" };

  // seperate token
  jwt = jwt.split(" ")[1];

  return { state: true, jwt };
}

function handleValidation(req, res) {
  // handle authorization header
  const { state: headerState, jwt } = handleAuthorizationHeader(
    req.headers.authorization
  );

  // check authorization header
  if (!headerState)
    return {
      state: false,
      message: "authorization header missing!",
      code: 400,
    };

  // check jwt validity
  const {
    state: jwtValidityState,
    error: jwtValidityError,
    data,
  } = EncryptionService.validateJwt(jwt);

  if (!jwtValidityState) {
    return {
      state: false,
      message: "invalid jwt!",
      error: jwtValidityError,
      code: 403,
    };
  }

  return { state: true, data };
}

async function isMentee(data) {
  const userId = data.data.id;
  const { state, data: user } = await crud.user.Read.readUserById(userId);

  // check state
  if (!state || !user) return { state: false };

  // arrange data format
  UserHelper.arrangeData(user);

  // check user type
  if (user.user_type !== "mentee") return { state: false };

  // return state
  return { state: true, mentee: user };
}

async function isMentor(data) {
  const userId = data.data.id;
  const { state, data: user } = await crud.user.Read.readUserById(userId);

  // check state
  if (!state || !user) return { state: false };

  // arrange data format
  UserHelper.arrangeData(user);

  // check user type
  if (user.user_type !== "mentor") return { state: false };

  // return state
  return { state: true, mentor: user };
}

class Middleware {
  static async authenticateMentee(req, res, next) {
    // make jwt authorization header validation and jwt validation
    const {
      state: validationState,
      message,
      error,
      code,
      data,
    } = handleValidation(req, res);
    if (!validationState) {
      return ExpressService.returnResponse(res, code, message, error);
    }

    // check user type
    const { state, mentee } = await isMentee(data);

    // check state
    if (!state) return ExpressService.returnResponse(res, 403, "forbidden!");

    // attach data to request for next operations
    req.data = mentee;
    next();
  }

  static async authenticateMentor(req, res, next) {
    // make jwt authorization header validation and jwt validation
    const {
      state: validationState,
      message,
      error,
      code,
      data,
    } = handleValidation(req, res);
    if (!validationState) {
      return ExpressService.returnResponse(res, code, message, error);
    }

    // check user type
    const { state, mentor } = await isMentor(data);

    // check state
    if (!state) return ExpressService.returnResponse(res, 403, "forbidden!");

    // attach data to request for next operations
    req.data = mentee;
    next();
  }
}

module.exports = Middleware;
