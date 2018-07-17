import Router from 'koa-router';
import userController from './controllers/UserController';

const router = new Router();

router.get('/:id', userController.get);

export default router;
