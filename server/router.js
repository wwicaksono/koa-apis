import Router from 'koa-router';
import UserController from './controllers/UserController';
import BookController from './controllers/BookController';
import CategoryController from './controllers/CategoryController';

const router = new Router();
const userController = new UserController();
const bookController = new BookController();
const categoryController = new CategoryController();

router
  .get('/user/all', userController.get.bind(userController))
  .get('/user/:id', userController.get.bind(userController))
  .post('/user', userController.add.bind(userController));

router
  .get('/book/all', bookController.get.bind(bookController))
  .post('/book/:id', bookController.update.bind(bookController))
  .post('/book', bookController.add.bind(bookController));

router
  .get('/category/all', categoryController.get.bind(categoryController))
  .post('/category/:id', categoryController.update.bind(categoryController))
  .post('/category', categoryController.add.bind(categoryController));

router.prefix('/v1');

export default router;
