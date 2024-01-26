const { Router } = require("express");
const router = Router();

// endpoint import
const endpoint = require("../../endpoint/endpoint");

// route to endpoints
router.route("/mentee").get(endpoint.private.privateMentee);
router.route("/mentor").get(endpoint.private.privateMentor);

module.exports = router;
