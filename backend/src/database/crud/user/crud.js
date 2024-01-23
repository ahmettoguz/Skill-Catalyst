const Create = require("./create/Create");
const Read = require("./read/Read");
const Update = require("./update/Update");
const Delete = require("./delete/Delete");

// operations
const crud = {
  Create: Create,
  Read: Read,
  Update: Update,
  Delete: Delete,
};

module.exports = crud;
