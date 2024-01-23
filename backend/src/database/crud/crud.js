const user = require("./user/crud");
const userTypes = require("./user-type/crud");

const crud = {
  user,
  userTypes,
};

module.exports = crud;
