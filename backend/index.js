// import app
const app = require("./src/app/app.js");
const HttpService = require("./src/service/HttpService.js");

// get ssl information
const isSslEnabled = process.env.SSL || "false";

// create server
let server;
if (isSslEnabled === "true") {
  console.log("ssl enabled");
} else {
  server = HttpService.getServer(app);
}

// specify port
const port = process.env.PORT || 3000;

// listen server
server.listen(port);

// display output
const protocol = isSslEnabled == true ? "https" : "http";
console.log(`Server is running on: ${protocol}://localhost:${port}`);
