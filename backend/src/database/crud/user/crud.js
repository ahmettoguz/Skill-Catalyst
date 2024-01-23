const Create = require("./create/Create");
const Read = require("./read/Read");
const Update = require("./update/Update");
const Delete = require("./delete/Delete");

// operations
const crud = {
  Create,
  Read,
  Update,
  Delete,
};

module.exports = crud;
