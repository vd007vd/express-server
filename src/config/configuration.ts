// import * as dotenv from 'dotenv';
// import {IConfig} from './IConfig'

import { config } from "dotenv";
config();
// // import * as constants from '../libs/constants';
import { IConfig } from "./IConfig";

// const envVars: NodeJS.ProcessEnv = process.env;

const envVars: NodeJS.ProcessEnv = process.env;
/* tslint:disable:no-var-requires */
const version = require("../../package.json").version;
// const isMongooseDebug = (envVars.NODE_ENV === constants.EnvVars.DEV)
//   ? true : false;

console.log("Debugging for envVar.mongoUrl", process.env.MONGO_URL);
const configurations = Object.freeze({
  port: envVars.PORT,
  nodeEnv: envVars.NODE_ENV,
  secretKey: envVars.secretKey || "the_super_secret_key",
  mongoUrl: envVars.MONGO_URL,
}) as IConfig;
console.log("Checking envVars.MONGO_URL ", envVars.MONGO_URL);
export default configurations;

// const envVars = dotenv.config().parsed;
// const config : IConfig = {
//     port: envVars.PORT,
//     nodeEnv : envVars.NODE_ENV,
//     secretKey: envVars.secret_key,
//     mongoUrl: envVars.MONGO_URL

// }
// Object.freeze(config)
// export default config;
