"use strict";
exports.__esModule = true;
var Server_1 = require("./Server");
var configuration_1 = require("./config/configuration");
// console.log("Before server instance");
var server = new Server_1["default"](configuration_1["default"]);
// console.log("after server instance");
console.log(server);
server.bootStrap().run();
