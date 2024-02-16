const LogUtility = require("./LogUtility");

class ExpressUtility {
  static returnResponse(res, statusCode, message, data = null) {
    // ---- usage ----
    // return ExpressUtility.returnResponse(res, 500, "Cannot verified that client connection to websocket.","optional additional data");
    // return ExpressUtility.returnResponse(res, 200, "user informations sent", "optional additional data");
    // ---- usage end ----

    const state = statusCode == 200 ? true : false;

    const jsonResult = {
      status: statusCode,
      state,
      message,
    };

    // add data if it is not null
    if (data != null) {
      jsonResult.data = data;
    }

    res.status(statusCode).json(jsonResult);
  }

  static displayRequestInfo(req, res, next) {
    const start = Date.now();

    res.on("finish", () => {
      const duration = Date.now() - start;
      const log = {
        method: req.method.toLowerCase(),
        endpoint: req.baseUrl + req.url,
        ip: req.connection.remoteAddress,
        statusCode: res.statusCode,
        responseTime: duration,
      };

      LogUtility.responseInfo(log);
    });

    next();
  }
}

module.exports = ExpressUtility;
