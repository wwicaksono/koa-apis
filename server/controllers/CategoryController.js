import _ from 'lodash';
import CategoryModel from '../models/CategoryModel';
import CategoryFacade from '../facade/CategoryFacade';

class CategoryController {
  static async get(ctx) {
    let categoryData;
    if (ctx.params.id) {
      categoryData = await CategoryModel.getOneById(ctx.params.id);
    } else {
      categoryData = await CategoryModel.getAll();
    }

    if (!_.isEmpty(categoryData)) {
      ctx.response.ok(categoryData);
    } else {
      ctx.response.notFound(JSON.stringify('category not found'));
    }
  }

  static async add(ctx) {
    const reqBody = ctx.request.body;
    const addValidation = await CategoryFacade.add(reqBody);
    if (addValidation === true) {
      const category = {
        name: reqBody.name,
        parentcategoryid: reqBody.parentcategoryid,
      };
      const insertResult = await CategoryModel.add(category);

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
        parentCategoryId: reqBody.parentCategoryId,
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
