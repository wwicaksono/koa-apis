import BaseModel from './base/BaseModel';

class CategoryModel extends BaseModel {
  async getAll() {
    try {
      return await this.db.any('select * from category order by name;');
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id) {
    try {
      return await this.db.any('select * from category where categoryid = $1;', [id]);
    } catch (error) {
      throw error;
    }
  }

  async getOneByCategoryname(name) {
    try {
      const result = await this.db.oneOrNone('select * from category where name = $1', [name]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async add(category) {
    const timeStamp = this.builder.toPostgresTimestamp();
    try {
      await this.db.none('insert into category(name, parentcategoryid, created_at, updated_at) values($1, $2, $3, $4)',
        [category.name, category.parentcategoryid, timeStamp, timeStamp]);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async update(category) {
    const timeStamp = this.builder.toPostgresTimestamp();
    try {
      await this.db.none('update category set name = $1, parentcategoryid = $2, updated_at = $3 where categoryid = $4;',
        [category.name, category.parentCategoryId, timeStamp, category.id]);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default CategoryModel;
