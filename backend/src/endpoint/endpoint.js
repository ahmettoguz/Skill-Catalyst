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
    // Create
    createUser: User.createUser,

    // Read
    readUsers: User.readUsers,
    readUsersLimited: User.readUsersLimited,
    readUsersInRange: User.readUsersInRange,
    readUserById: User.readUserById,

    // Update
    updateUserType: UserType.updateUserType,
    updateUserTypes: UserType.updateUserTypes,

    // Delete
    deleteUserType: UserType.deleteUserType,
    deleteUserTypes: UserType.deleteUserTypes,
  },

  userType: {
    // Create
    createUserType: UserType.createUserType,

    // Read
    readUserTypes: UserType.readUserTypes,
    readUserTypesLimited: UserType.readUserTypesLimited,
    readUserTypeById: UserType.readUserTypeById,

    // Update
    updateUserType: UserType.updateUserType,
    updateUserTypes: UserType.updateUserTypes,

    // Delete
    deleteUserType: UserType.deleteUserType,
    deleteUserTypes: UserType.deleteUserTypes,
  },
};

module.exports = endpoint;
