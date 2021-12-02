"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.open = function (mongoUrl) {
        return new Promise(function (resolve, reject) {
            var options = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            };
            console.log("Checking the value for MongoURL", mongoUrl);
            mongoose.connect(mongoUrl, function (err) {
                if (err) {
                    console.log("checking mongoURL", mongoUrl);
                    reject(err);
                    return;
                }
                resolve(true);
                console.log("App is successfully connected to MongoDB");
            });
        });
    };
    Database.disconnect = function () {
        console.log("disconnected");
    };
    return Database;
}());
exports["default"] = Database;
