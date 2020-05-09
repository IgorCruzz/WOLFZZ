import { Router } from 'express';

import Brute from 'express-brute';
import BruteRedis from 'express-brute-redis';

import UserController from './app/Controllers/UserController';
import StudentController from './app/Controllers/StudentController';
import PlanController from './app/Controllers/PlanController';
import RegistrationController from './app/Controllers/RegistrationController';
import CheckinController from './app/Controllers/CheckinController';
import StudentOrderController from './app/Controllers/StudentOrderController';
import authMiddleware from './app/middlewares/auth';
import GymOrderController from './app/Controllers/GymOrderController';
import SessionController from './app/Controllers/SessionController';

const routes = new Router();

const bruteStore = new BruteRedis({
  host: process.env.REDIS_HOST,
  port: process.env.REDOS_PORT,
});

const bruteForce = new Brute(bruteStore);

routes.post('/session', bruteForce.prevent, UserController.store);

routes.put('/student/:id', StudentController.update);
routes.post('/students/:id/checkins', CheckinController.store);
routes.get('/students/:id/checkins', CheckinController.index);
routes.post('/students/:id/help-orders', StudentOrderController.store);
routes.get('/students/:id/help-orders', StudentOrderController.index);
routes.post('/login', SessionController.store);

routes.use(authMiddleware);
routes.post('/student', StudentController.store);
routes.get('/students', StudentController.show);
routes.get('/student', StudentController.index);
routes.put('/student/:id', StudentController.update);
routes.delete('/student/:id', StudentController.delete);

routes.get('/plan', PlanController.index);
routes.post('/plan', PlanController.store);
routes.put('/plan/:planId', PlanController.update);
routes.delete('/plan/:planId', PlanController.delete);

routes.post('/registration', RegistrationController.store);
routes.get('/registration', RegistrationController.index);
routes.delete('/registration/:regisId', RegistrationController.delete);
routes.put('/registration/:regisId', RegistrationController.update);

routes.post('/help-orders/:id/answer', GymOrderController.store);
routes.get('/help-orders', GymOrderController.index);
routes.delete('/help-orders/:id', GymOrderController.delete);

export default routes;
