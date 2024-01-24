const { Router } = require("express");
const router = Router();

// endpoint import
const endpoint = require("../../endpoint/endpoint");

// route to endpoints
// get
router.route("/").get(endpoint.user.readUsers);
router.route("/limited").get(endpoint.user.readUsersLimited); // ?sort=asc&limit=5
router.route("/in-range").get(endpoint.user.readUsersInRange); // ?sort=asc&startRange=2&endRange=3
router.route("/:id").get(endpoint.user.readUserById );

// post
router.route("/create").post(endpoint.user.createUser);

router.route("/update").post(endpoint.userType.updateUserType);
router.route("/update-many").post(endpoint.userType.updateUserTypes);

router.route("/delete").post(endpoint.userType.deleteUserType);
router.route("/delete-many").post(endpoint.userType.deleteUserTypes);

module.exports = router;
