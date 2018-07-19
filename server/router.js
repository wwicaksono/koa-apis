import Router from 'koa-router';
import UserController from './controllers/UserController';

const router = new Router();

router.get('/:id', UserController.get)
  .post('/', UserController.add);

export default router;
