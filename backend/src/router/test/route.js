const { Router } = require("express");
const router = Router();

// endpoint import
const endpoint = require("../../endpoint/endpoint");

// route to endpoints
router.route("/").post(endpoint.user.getUsers);

module.exports = router;
