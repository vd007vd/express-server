import Server from "./Server";
import config  from "./config/configuration";

console.log("Before server instance");

const server = new Server(config)
console.log("after server instance");
console.log(server);
server.bootStrap().run();