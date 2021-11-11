import {Router} from 'express';
import TraineeController from './controller';
import Validation from './validation';
import validationHandler from './validationHandler'

const traineeRouter = Router();

traineeRouter.route('/')
.get(validationHandler(Validation.get), TraineeController.get)
.post(validationHandler(Validation.create), TraineeController.create)
.put(validationHandler(Validation.update), TraineeController.update)
.delete(validationHandler(Validation.delete), TraineeController.delete);

traineeRouter.route('/:id')
    .delete(validationHandler(Validation.delete), TraineeController.delete);

export default traineeRouter;