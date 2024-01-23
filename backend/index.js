// import env variables
const dotenv = require("dotenv");
dotenv.config();

// import app and server
const http = require("http");
const app = require("./src/app/app.js");

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

console.log(`Server is running on: http://localhost:${port}`);
