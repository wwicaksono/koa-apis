import BaseModel from './base/BaseModel';

class BookModel extends BaseModel {
  async getAll() {
    try {
      return await this.db.any('select * from books order by name;');
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id) {
    try {
      return await this.db.any('select * from books where bookid = $1;', [id]);
    } catch (error) {
      throw error;
    }
  }

  async getOneByBookname(name) {
    try {
      const result = await this.db.oneOrNone('select * from books where name = $1', [name]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async add(book) {
    const timeStamp = this.builder.toPostgresTimestamp();
    try {
      await this.db.none('insert into books(name, description, created_at, updated_at) values($1, $2, $3, $4)',
        [book.name, book.description, timeStamp, timeStamp]);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async update(book) {
    const timeStamp = this.builder.toPostgresTimestamp();
    try {
      await this.db.none('update books set name = $1, qty = $2, description = $3, updated_at = $4 where bookid = $5;',
        [book.name, book.qty, book.description, timeStamp, book.id]);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default BookModel;
