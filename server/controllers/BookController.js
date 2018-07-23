import _ from 'lodash';
import BookModel from '../models/BookModel';
import BookFacade from '../facade/BookFacade';

class BookController {
  static async get(ctx) {
    let bookData;
    if (ctx.params.id) {
      bookData = await BookModel.getOneById(ctx.params.id);
    } else {
      bookData = await BookModel.getAll();
    }

    if (!_.isEmpty(bookData)) {
      ctx.response.ok(bookData);
    } else {
      ctx.response.notFound(JSON.stringify('books not found'));
    }
  }

  static async add(ctx) {
    const reqBody = ctx.request.body;
    const addValidation = await BookFacade.add(reqBody);
    if (addValidation === true) {
      const book = {
        name: reqBody.name,
        description: reqBody.description,
      };
      const insertResult = await BookModel.add(book);

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
    const addValidation = await BookFacade.update(ctx.params.id, reqBody);
    if (addValidation === true) {
      const book = {
        id: ctx.params.id,
        name: reqBody.name,
        qty: reqBody.qty,
        description: reqBody.description,
      };
      const updateResult = await BookModel.update(book);

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

export default BookController;
