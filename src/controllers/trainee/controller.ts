import { Request, Response, NextFunction } from "express";


class TraineeController{

    static instance : TraineeController;

    static getInstance(){
        if (TraineeController.instance){
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    get(req: Request, res: Response, next: NextFunction) {
        try{
            res.status(200).send({
                message: 'Trainee fetched successfully',
                data: [
                    {
                        name: 'Trainee1',
                        address: "India",
                    }
                ],
                status: 'success',
            });
        } catch(err) {
            console.log('error is',err);
        }
    }

    create(req: Request, res: Response, next : NextFunction){
        try{
            res.status(200).send({
                message: "Trainee created successfully",
                data : [
                    {
                        name : "Trainee2",
                        address : "Italy",
                    }
                ],
                status : 'success',
            });
        } catch (err){
            console.log('errr is ', err);
        }
    }
    update(req: Request, res: Response, next : NextFunction){
        try{
            res.status(200).send({
                message: 'Trainee updated successfully',
                data: [
                    {
                        name: 'Trainee3',
                        address: 'Japan'
                    }
                ]
            });
        } catch(err){
            console.log('err is ',err);
        }
    }
    
    delete(req: Request, res: Response, next: NextFunction){
        try{
            res.status(200).send({
                message: 'trainee deleted Successfully',
                data: [
                    {
                        name: 'Trainee4',
                        address:'New Zealand',
                    }
                ],
            });
        } catch(err){
            console.log('err is ', err);
        }
    }

}

export default TraineeController.getInstance();