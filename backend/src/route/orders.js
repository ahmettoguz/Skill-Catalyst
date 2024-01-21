const express = require("express");
const router = express.Router();

const ExpressService = require("../service/ExpressService");

router.get("/", (req, res, next) => {
  // get data form query string
  const orderName = req.query.name;
  
  return ExpressService.returnResponse(res, 200, "get orders successfully", orderName);
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;

  return ExpressService.returnResponse(res, 200, `special order id: ${id}`);
});

router.post("/", (req, res, next) => {
  return ExpressService.returnResponse(res, 200, "post orders");
});

module.exports = router;
