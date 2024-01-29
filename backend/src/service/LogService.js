class LogService {
  static info(text) {
    console.log("\x1b[36m%s\x1b[0m", `INFO: ${text}`);
  }

  static success(text) {
    console.log("\x1b[32m%s\x1b[0m", `SUCCESS: ${text}`);
  }

  static error(text) {
    const errorStackTrace = new Error().stack.split("\n")[2];
    console.log("\x1b[31m%s\x1b[0m", `ERROR: ${text}\n ${errorStackTrace}`);
  }

  static warning(text) {
    console.log("\x1b[33m%s\x1b[0m", `WARNING: ${text}`);
  }

  static stringfy(jsObject) {
    console.log(
      "\x1b[33m%s\x1b[0m",
      `STRINGFY:\n${JSON.stringify(jsObject, null, 3)}`
    );
  }

  static responseInfo(log) {
    if (log.statusCode == 200)
      console.log("\x1b[92m%s\x1b[0m", `${JSON.stringify(log)}`);
    else if (log.statusCode == 500)
      console.log("\x1b[31m%s\x1b[0m", `${JSON.stringify(log)}`);
    else console.log("\x1b[33m%s\x1b[0m", `${JSON.stringify(log)}`);
  }
}

module.exports = LogService;
