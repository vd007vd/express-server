"use strict";
exports.__esModule = true;
var TraineeController = /** @class */ (function () {
    function TraineeController() {
    }
    TraineeController.getInstance = function () {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    };
    TraineeController.prototype.get = function (req, res, next) {
        try {
            res.status(200).send({
                message: 'Trainee fetched successfully',
                data: [
                    {
                        name: 'Trainee1',
                        address: "India"
                    }
                ],
                status: 'success'
            });
        }
        catch (err) {
            console.log('error is', err);
        }
    };
    TraineeController.prototype.create = function (req, res, next) {
        try {
            res.status(200).send({
                message: "Trainee created successfully",
                data: [
                    {
                        name: "Trainee2",
                        address: "Italy"
                    }
                ],
                status: 'success'
            });
        }
        catch (err) {
            console.log('errr is ', err);
        }
    };
    TraineeController.prototype.update = function (req, res, next) {
        try {
            res.status(200).send({
                message: 'Trainee updated successfully',
                data: [
                    {
                        name: 'Trainee3',
                        address: 'Japan'
                    }
                ]
            });
        }
        catch (err) {
            console.log('err is ', err);
        }
    };
    TraineeController.prototype["delete"] = function (req, res, next) {
        try {
            res.status(200).send({
                message: 'trainee deleted Successfully',
                data: [
                    {
                        name: 'Trainee4',
                        address: 'New Zealand'
                    }
                ]
            });
        }
        catch (err) {
            console.log('err is ', err);
        }
    };
    return TraineeController;
}());
exports["default"] = TraineeController.getInstance();
