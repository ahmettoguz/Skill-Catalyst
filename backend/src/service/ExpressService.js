class ExpressService {
  static returnResponse(res, statusCode, message, data = null) {
    // ---- usage ----
    // return ExpressService.returnResponse(res, 500, "Cannot verified that client connection to websocket.");
    // return ExpressService.returnResponse(res, 200, "user informations sent", "optional additional data");
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
    console.info(
      `\n---------------- Incoming Request ----------------\n` +
        `Endpoint: ${req.baseUrl}${req.url}\n` +
        `Method  : ${req.method}\n` +
        `IP      : ${req.connection.remoteAddress}\n` +
        `Body    : ${JSON.stringify(req.body, null, 2)}\n` +
        `--------------------------------------------------\n`
    );

    next();
  }
}

module.exports = ExpressService;
