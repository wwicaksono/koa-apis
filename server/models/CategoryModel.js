import pg from './base/db';
import Builder from '../library/Builder';

class CategoryModel {
  static async getAll() {
    try {
      return await pg.any('select * from category order by name;');
    } catch (error) {
      throw error;
    }
  }

  static async getOneById(id) {
    try {
      return await pg.any('select * from category where categoryid = $1;', [id]);
    } catch (error) {
      throw error;
    }
  }

  static async getOneByCategoryname(name) {
    try {
      const result = await pg.oneOrNone('select * from category where name = $1', [name]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async add(category) {
    const timeStamp = Builder.toPostgresTimestamp();
    try {
      await pg.none('insert into category(name, parentcategoryid, created_at, updated_at) values($1, $2, $3, $4)',
        [category.name, category.parentcategoryid, timeStamp, timeStamp]);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async update(category) {
    const timeStamp = Builder.toPostgresTimestamp();
    try {
      await pg.none('update category set name = $1, parentcategoryid = $2, updated_at = $3 where categoryid = $4;',
        [category.name, category.parentCategoryId, timeStamp, category.id]);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default CategoryModel;
