import _ from 'lodash';
import CategoryModel from '../models/CategoryModel';

class CategoryFacade {
  static async add(category) {
    if (_.isEmpty(category)) return 'No input specified';
    if (_.isEmpty(category.name)) return 'Please input category name';

    const categoryData = await CategoryModel.getOneByCategoryname(category.name);
    if (!_.isEmpty(categoryData)) return 'Category name already exists';

    return true;
  }

  static async update(id, category) {
    if (_.isEmpty(category)) return 'No input specified';
    if (_.isEmpty(id)) return 'No categoryid specified';
    if (_.isEmpty(category.name)) return 'Please input category name';

    const categoryData = await CategoryModel.getOneById(id);
    if (_.isEmpty(categoryData)) return 'Categoryid is not exists';

    return true;
  }
}

export default CategoryFacade;
