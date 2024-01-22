const { Router } = require("express");
const router = Router();

// endpoint import
const endpoint = require("../../endpoint/endpoint");

// route to endpoints
// get
router.route("/users").get(endpoint.user.getUsers);
router.route("/userParam/:id").get(endpoint.user.getUserAsParameter);
router.route("/userQuery").get(endpoint.user.getUserFromQueryString);

// post
router.route("/add-user").post(endpoint.user.addUser);

module.exports = router;
