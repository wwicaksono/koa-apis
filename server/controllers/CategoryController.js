import _ from 'lodash';
import CategoryModel from '../models/CategoryModel';
import CategoryFacade from '../facade/CategoryFacade';

class CategoryController {
  static async get(ctx) {
    let bookData;
    if (ctx.params.id) {
      bookData = await CategoryModel.getOneById(ctx.params.id);
    } else {
      bookData = await CategoryModel.getAll();
    }

    if (!_.isEmpty(bookData)) {
      ctx.response.ok(bookData);
    } else {
      ctx.response.notFound(JSON.stringify('books not found'));
    }
  }

  static async add(ctx) {
    const reqBody = ctx.request.body;
    const addValidation = await CategoryFacade.add(reqBody);
    if (addValidation === true) {
      const book = {
        name: reqBody.name,
        description: reqBody.description,
      };
      const insertResult = await CategoryModel.add(book);

      if (insertResult) {
        ctx.response.ok(JSON.stringify('success'));
      } else {
        ctx.response.badRequest(JSON.stringify('failed'));
      }
    } else {
      ctx.response.badRequest(JSON.stringify(addValidation));
    }
  }

  static async update(ctx) {
    const reqBody = ctx.request.body;
    const addValidation = await CategoryFacade.update(ctx.params.id, reqBody);
    if (addValidation === true) {
      const book = {
        id: ctx.params.id,
        name: reqBody.name,
        qty: reqBody.qty,
        description: reqBody.description,
      };
      const updateResult = await CategoryModel.update(book);

      if (updateResult) {
        ctx.response.ok(JSON.stringify('success'));
      } else {
        ctx.response.badRequest(JSON.stringify('failed'));
      }
    } else {
      ctx.response.badRequest(JSON.stringify(addValidation));
    }
  }
}

export default CategoryController;
