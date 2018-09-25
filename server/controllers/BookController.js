import _ from 'lodash';
import BookModel from '../models/BookModel';
import BookFacade from '../facade/BookFacade';

class BookController {
  constructor() {
    this.bookModel = new BookModel();
    this.bookFacade = new BookFacade();
  }

  async get(ctx) {
    let bookData;
    if (ctx.params.id) {
      bookData = await this.bookModel.getOneById(ctx.params.id);
    } else {
      bookData = await this.bookModel.getAll();
    }

    if (!_.isEmpty(bookData)) {
      ctx.response.ok(bookData);
    } else {
      ctx.response.notFound(JSON.stringify('books not found'));
    }
  }

  async add(ctx) {
    const reqBody = ctx.request.body;
    const addValidation = await this.bookFacade.add(reqBody);
    if (addValidation === true) {
      const book = {
        name: reqBody.name,
        description: reqBody.description,
      };
      const insertResult = await this.bookModel.add(book);

      if (insertResult) {
        ctx.response.ok(JSON.stringify('success'));
      } else {
        ctx.response.badRequest(JSON.stringify('failed'));
      }
    } else {
      ctx.response.badRequest(JSON.stringify(addValidation));
    }
  }

  async update(ctx) {
    const reqBody = ctx.request.body;
    const addValidation = await this.bookFacade.update(ctx.params.id, reqBody);
    if (addValidation === true) {
      const book = {
        id: ctx.params.id,
        name: reqBody.name,
        qty: reqBody.qty,
        description: reqBody.description,
      };
      const updateResult = await this.bookModel.update(book);

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
