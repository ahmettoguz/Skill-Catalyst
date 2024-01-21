const { Router } = require("express");
const router = Router();

// endpoint import
const endpoint = require("../../endpoint/endpoint");

// route to endpoints
router.route("/login").get(endpoint.auth.login);
router.route("/logout").get(endpoint.auth.logout);

module.exports = router;
