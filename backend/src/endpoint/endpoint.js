const HealthCheck = require("./health-check/HealthCheck");
const Auth = require("./auth/Auth");
const User = require("./user/User");

// all endpoints
const endpoint = {
  healthCheck: {
    backend: HealthCheck.backend,
    websocket: HealthCheck.websocket,
  },

  auth: {
    login: Auth.login,
    logout: Auth.logout,
  },

  user: {
    getUsers: User.getUsers,
    getUserAsParameter: User.getUserAsParameter,
    getUserFromQueryString: User.getUserFromQueryString,
  },
};

module.exports = endpoint;
