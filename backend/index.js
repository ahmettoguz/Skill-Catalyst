const http = require("http");
const app = require("./src/app/app.js");

// import env variables
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

console.log(`Server is running on: http://localhost:${port}`);
