const { Router } = require("express");
const router = Router();

// endpoint import
const endpoint = require("../../endpoint/endpoint");

// route to endpoints
router.route("/login").post(endpoint.auth.login);

module.exports = router;
