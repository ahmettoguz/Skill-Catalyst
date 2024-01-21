const express = require("express");
const router = express.Router();

const ExpressService = require("../service/ExpressService");


router.get("/", (req, res, next) => {
  return ExpressService.returnResponse(res, 200, "get products successfully");
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;

  return ExpressService.returnResponse(res, 200, `special product id: ${id}`);
});

router.post("/", (req, res, next) => {
  return ExpressService.returnResponse(res, 200, "post products");
});

module.exports = router;
