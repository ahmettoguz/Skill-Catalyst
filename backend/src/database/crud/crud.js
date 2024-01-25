const user = require("./user/crud");
const userTypes = require("./user-type/crud");

const crud = {
  user : user,
  userTypes: userTypes,
};

module.exports = crud;
