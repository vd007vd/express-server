"use strict";
// import * as dotenv from 'dotenv';
// import {IConfig} from './IConfig'
exports.__esModule = true;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// const envVars: NodeJS.ProcessEnv = process.env;
var envVars = process.env;
/* tslint:disable:no-var-requires */
var version = require("../../package.json").version;
// const isMongooseDebug = (envVars.NODE_ENV === constants.EnvVars.DEV)
//   ? true : false;
console.log("Debugging for envVar.mongoUrl", process.env.MONGO_URL);
var configurations = Object.freeze({
    port: envVars.PORT,
    nodeEnv: envVars.NODE_ENV,
    secretKey: envVars.secretKey || "the_super_secret_key",
    mongoUrl: envVars.MONGO_URL
});
console.log("Checking envVars.MONGO_URL ", envVars.MONGO_URL);
exports["default"] = configurations;
// const envVars = dotenv.config().parsed;
// const config : IConfig = {
//     port: envVars.PORT,
//     nodeEnv : envVars.NODE_ENV,
//     secretKey: envVars.secret_key,
//     mongoUrl: envVars.MONGO_URL
// }
// Object.freeze(config)
// export default config;
