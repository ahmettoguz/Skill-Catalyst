const healthCheckRoute = require("./health-check/route");
const testRoute = require("./test/route");
const authRoute = require("./auth/route");
const userRoute = require("./user/route");

// all routes
const router = {
  healthCheck: healthCheckRoute,
  test: testRoute,
  auth: authRoute,
  user: userRoute,
};

module.exports = router;
