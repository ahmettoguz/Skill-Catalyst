const { Router } = require("express");
const router = Router();

// endpoint import
const endpoint = require("../../endpoint/endpoint");

// route to endpoints
// get
router.route("/").get(endpoint.userType.getUserTypes);
router.route("/limited").get(endpoint.userType.getUserTypesLimited);

// post
router.route("/").post(endpoint.userType.createUserType);
router.route("/create").post(endpoint.userType.createUserType);
router.route("/update").post(endpoint.userType.updateUserType);

// root
router.route("/:id").get(endpoint.userType.getUserType);
module.exports = router;
