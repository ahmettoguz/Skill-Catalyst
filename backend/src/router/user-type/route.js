const { Router } = require("express");
const router = Router();

// endpoint import
const endpoint = require("../../endpoint/endpoint");

// route to endpoints
// get
router.route("/").get(endpoint.userType.getUserTypes);

// post
router.route("/create").post(endpoint.userType.createUserType);

module.exports = router;
