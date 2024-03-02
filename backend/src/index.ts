// import app
const app = require("./app/app.ts");

// import servers
const HttpUtility = require("./utility/HttpUtility");
const HttpsUtility = require("./utility/HttpsUtility");

// import environment variables
const EnvUtility = require("./utility/EnvUtility");

// create server
let server;
if (EnvUtility.isSslEnabled == true) {
  server = HttpsUtility.getServer(app);
} else {
  server = HttpUtility.getServer(app);
}

// listen server
if (server != undefined) server.listen(EnvUtility.port);

// display output
console.log(
  `Server is running on: ${EnvUtility.protocol}://localhost:${EnvUtility.port}`
);
