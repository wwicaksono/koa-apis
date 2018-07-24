import Router from 'koa-router';
import UserController from './controllers/UserController';
import BookController from './controllers/BookController';
import CategoryController from './controllers/CategoryController';

const router = new Router();

router
  .get('/user/all', UserController.get)
  .get('/user/:id', UserController.get)
  .post('/user', UserController.add);

router
  .get('/book/all', BookController.get)
  .post('/book/:id', BookController.update)
  .post('/book', BookController.add);

router
  .get('/category/all', CategoryController.get)
  .post('/category/:id', CategoryController.update)
  .post('/category', CategoryController.add);

router.prefix('/v1');

export default router;
