import * as dotenv from 'dotenv';
import {IConfig} from './IConfig'

const envVars = dotenv.config().parsed;
const config : IConfig = {
    port: envVars.PORT,
    nodeEnv : envVars.NODE_ENV,
    secretKey: envVars.secret_key

}
Object.freeze(config)
export default config;