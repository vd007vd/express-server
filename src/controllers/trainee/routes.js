"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controller_1 = require("./controller");
var validation_1 = require("./validation");
var validationHandler_1 = require("./validationHandler");
var traineeRouter = (0, express_1.Router)();
traineeRouter.route('/')
    .get((0, validationHandler_1["default"])(validation_1["default"].get), controller_1["default"].get)
    .post((0, validationHandler_1["default"])(validation_1["default"].create), controller_1["default"].create)
    .put((0, validationHandler_1["default"])(validation_1["default"].update), controller_1["default"].update)["delete"]((0, validationHandler_1["default"])(validation_1["default"]["delete"]), controller_1["default"]["delete"]);
traineeRouter.route('/:id')["delete"]((0, validationHandler_1["default"])(validation_1["default"]["delete"]), controller_1["default"]["delete"]);
exports["default"] = traineeRouter;
