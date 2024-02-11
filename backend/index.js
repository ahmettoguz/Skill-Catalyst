// import app
const app = require("./src/app/app.js");

// import servers
const HttpService = require("./src/service/HttpService.js");
const HttpsService = require("./src/service/HttpsService.js");

// import environment variables
const EnvService = require("./src/service/EnvService.js");

// create server
let server;
if (EnvService.isSslEnabled === "true") {
  server = HttpsService.getServer(app);
} else {
  server = HttpService.getServer(app);
}

// listen server
server.listen(EnvService.port);

// display output
const protocol = EnvService.isSslEnabled == "true" ? "https" : "http";
console.log(`Server is running on: ${protocol}://localhost:${EnvService.port}`);
