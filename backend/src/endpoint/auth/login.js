const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const ExpressService = require("../service/ExpressService");
router.post("/", (req, res, next) => {
  // get data from body
  const user = {
    name: req.body.name,
    password: req.body.password,
  };

  // use bcrypt to set password in sign in
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      const user = {
        name: req.body.name,
        password: hash,
      };
    }
  });

  // in login compare passwords:
  bcrypt.compare(req.body.password, "storedPassword", (err, res)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(res);
    }
  })

  return ExpressService.returnResponse(res, 200, "post to login", user);
});

module.exports = router;
