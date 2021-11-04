import {Request, Response , NextFunction } from 'express';

export default(err: EError , req : Request, res : Response, next : NextFunction)=> {
const {error, message, status } = err;

const result = {
    error : error || 'Not found',
    message : message || 'error',
    status : status || 500,
    timeStamp : new Date()
}
res.status(result.status).json(result);
}