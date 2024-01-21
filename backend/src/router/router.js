const healthCheckRoute = require("./health-check/route");
const authRoute = require("./auth/route");

// all routes
const router = {
  healthCheck: healthCheckRoute,
  auth: authRoute,
};

module.exports = router;
