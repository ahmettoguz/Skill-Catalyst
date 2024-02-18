const LogUtility = require("./LogUtility");
const fs = require("fs");
const path = require("path");

class FileUtility {
  static readFile(relativePath) {
    try {
      return fs.readFileSync(path.join(__dirname, ...relativePath), "utf8");
    } catch (error) {
      LogUtility.error("File service cannot read file!", error);
    }
  }
}

module.exports = FileUtility;
