const HealthCheck = require("./health-check/HealthCheck");
const Test = require("./test/Test");
const Auth = require("./auth/Auth");
const User = require("./user/User");
const UserType = require("./user-type/UserType");

// all endpoints
const endpoint = {
  test: {
    test: Test.test,
  },

  healthCheck: {
    backend: HealthCheck.backend,
    websocket: HealthCheck.websocket,
  },

  auth: {
    login: Auth.login,
    logout: Auth.logout,
  },

  user: {
    // -------------------- get
    getUsers: User.getUsers,
    getUserAsParameter: User.getUserAsParameter,
    getUserFromQueryString: User.getUserFromQueryString,

    // -------------------- post
    // Create
    addUser: User.addUser,
  },

  userType: {
    // -------------------- get
    getUserTypes: UserType.getUserTypes,

    // -------------------- post
    // Create
    createUserType: UserType.createUserType,
  },
};

module.exports = endpoint;
