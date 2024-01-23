class LogService {
  static info(text) {
    console.log("\x1b[36m%s\x1b[0m", `INFO: ${text}`);
  }

  static success(text) {
    console.log("\x1b[32m%s\x1b[0m", `SUCCESS: ${text}`);
  }

  static error(text) {
    console.log("\x1b[31m%s\x1b[0m", `ERROR: ${text}`);
  }

  static warning(text) {
    console.log("\x1b[33m%s\x1b[0m", `WARNING: ${text}`);
  }
}

module.exports = LogService;
