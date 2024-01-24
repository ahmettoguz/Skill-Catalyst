const { Router } = require("express");
const router = Router();

// endpoint import
const endpoint = require("../../endpoint/endpoint");

// route to endpoints
// get
router.route("/").get(endpoint.userType.readUserTypes);
router.route("/limited").get(endpoint.userType.readUserTypesLimited); // ?sort=asc&limit=5
router.route("/:id").get(endpoint.userType.readUserTypeById);

// post
router.route("/create").post(endpoint.userType.createUserType);

router.route("/update").post(endpoint.userType.updateUserType);
router.route("/update-many").post(endpoint.userType.updateUserTypes);

router.route("/delete").post(endpoint.userType.deleteUserType);
router.route("/delete-many").post(endpoint.userType.deleteUserTypes);

module.exports = router;
