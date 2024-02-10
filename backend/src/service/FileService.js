const LogService = require("./LogService");
const fs = require("fs");
const path = require("path");

class FileService {
  static readFile(relativePath) {
    try {
      return fs.readFileSync(path.join(__dirname, ...relativePath), "utf8");
    } catch (error) {
      LogService.error("File service cannot read file!", error);
    }
  }
}

module.exports = FileService;
