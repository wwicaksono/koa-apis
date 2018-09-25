import _ from 'lodash';
import CategoryModel from '../models/CategoryModel';
import CategoryFacade from '../facade/CategoryFacade';

class CategoryController {
  constructor() {
    this.categoryModel = new CategoryModel();
    this.categoryFacade = new CategoryFacade();
  }

  async get(ctx) {
    let categoryData;
    if (ctx.params.id) {
      categoryData = await this.categoryModel.getOneById(ctx.params.id);
    } else {
      categoryData = await this.categoryModel.getAll();
    }

    if (!_.isEmpty(categoryData)) {
      ctx.response.ok(categoryData);
    } else {
      ctx.response.notFound(JSON.stringify('category not found'));
    }
  }

  async add(ctx) {
    const reqBody = ctx.request.body;
    const addValidation = await this.categoryFacade.add(reqBody);
    if (addValidation === true) {
      const category = {
        name: reqBody.name,
        parentcategoryid: reqBody.parentcategoryid,
      };
      const insertResult = await this.categoryModel.add(category);

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
    const addValidation = await this.categoryFacade.update(ctx.params.id, reqBody);
    if (addValidation === true) {
      const book = {
        id: ctx.params.id,
        name: reqBody.name,
        parentCategoryId: reqBody.parentCategoryId,
      };
      const updateResult = await this.categoryModel.update(book);

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
