import Router from 'koa-router';
import UserController from './controllers/UserController';

const router = new Router();

router
  .get('/user/all', UserController.get)
  .get('/user/:id', UserController.get)
  .post('/user', UserController.add);

router.prefix('/v1');

export default router;
