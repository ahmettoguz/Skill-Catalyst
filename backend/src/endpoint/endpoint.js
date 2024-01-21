const HealthCheck = require("./health-check/HealthCheck");
const Auth = require("./auth/Auth");

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
};

module.exports = endpoint;
