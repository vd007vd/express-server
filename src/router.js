"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes_1 = require("./controllers/trainee/routes");
var mainRouter = (0, express_1.Router)();
mainRouter.use('/trainee', routes_1["default"]);
exports["default"] = mainRouter;
