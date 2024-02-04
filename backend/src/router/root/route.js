const router = require("../router");

module.exports = (app) => {
  app.use("/health-check", router.healthCheck);
  app.use("/test", router.test);
  app.use("/auth", router.auth);
  app.use("/user", router.user);
  app.use("/user-type", router.userType);
  app.use("/private", router.privateRoute);
};
