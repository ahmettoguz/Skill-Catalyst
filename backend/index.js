// import app
const app = require("./src/app/app.js");
const HttpService = require("./src/service/HttpService.js");

// import environment variables
const EnvService = require("./src/service/EnvService.js");

// create server
let server;
if (EnvService.isSslEnabled === "true") {
  console.log("ssl enabled");
} else {
  server = HttpService.getServer(app);
}

// listen server
server.listen(EnvService.port);

// display output
const protocol = EnvService.isSslEnabled == true ? "https" : "http";
console.log(`Server is running on: ${protocol}://localhost:${EnvService.port}`);
