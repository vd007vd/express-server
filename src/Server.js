"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var router_1 = require("./router");
var Database_1 = require("./libs/Database");
var Server = /** @class */ (function () {
    function Server(config) {
        this.config = config;
        this.app = express();
    }
    Server.prototype.bootStrap = function () {
        this.setupRoutes();
        this.initBodyParser();
        return this;
    };
    Server.prototype.setupRoutes = function () {
        var app = this.app;
        app.get("/health-check", function (req, res) {
            res.send("I am OK");
        });
        app.use("/api", router_1["default"]);
    };
    Server.prototype.initBodyParser = function () {
        this.app.use(bodyParser.json());
    };
    Server.prototype.run = function () {
        var _a = this, app = _a.app, _b = _a.config, port = _b.port, mongoUrl = _b.mongoUrl;
        console.log("Checking for port and mongoURL", port, mongoUrl);
        Database_1["default"].open(mongoUrl)
            .then(function (res) {
            app.listen(port, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("app is runnig on port " + port);
            });
        })["catch"](function (err) {
            console.log(err);
        });
    };
    return Server;
}());
exports["default"] = Server;
