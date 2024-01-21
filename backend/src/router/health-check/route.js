const { Router } = require("express");
const router = Router();

// endpoint import
const endpoint = require("../../endpoint/endpoint");

// route to endpoints
router.route("/backend").get(endpoint.healthCheck.backend);
router.route("/websocket").get(endpoint.healthCheck.websocket);

module.exports = router;
