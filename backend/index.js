// import app
const app = require("./src/app/app.js");

// import servers
const HttpUtility = require("./src/utility/HttpUtility.js");
const HttpsUtility = require("./src/utility/HttpsUtility.js");

// import environment variables
const EnvUtility = require("./src/utility/EnvUtility.js");

// create server
let server;
if (EnvUtility.isSslEnabled === "true") {
  server = HttpsUtility.getServer(app);
} else {
  server = HttpUtility.getServer(app);
}

// listen server
server.listen(EnvUtility.port);

// display output
const protocol = EnvUtility.isSslEnabled == "true" ? "https" : "http";
console.log(`Server is running on: ${protocol}://localhost:${EnvUtility.port}`);
