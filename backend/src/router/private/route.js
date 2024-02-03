const { Router } = require("express");
const router = Router();

// internal middleware import
const Middleware = require("../../middleware/Middleware");

// endpoint import
const endpoint = require("../../endpoint/endpoint");

// route to endpoints
router.route("/mentee").get(Middleware.authenticateMentee, endpoint.private.privateMentee);
router.route("/mentor").get(Middleware.authenticateMentor, endpoint.private.privateMentor);

module.exports = router;
