const healthCheckRoute = require("./health-check/route");
const authRoute = require("./auth/route");
const userRoute = require("./user/route");

// all routes
const router = {
  healthCheck: healthCheckRoute,
  auth: authRoute,
  user: userRoute,
};

module.exports = router;
