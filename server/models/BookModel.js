import pg from './base/db';
import Builder from '../library/Builder';

class BookModel {
  static async getAll() {
    try {
      return await pg.any('select * from books order by name;');
    } catch (error) {
      throw error;
    }
  }

  static async getOneById(id) {
    try {
      return await pg.any('select * from books where bookid = $1;', [id]);
    } catch (error) {
      throw error;
    }
  }

  static async getOneByBookname(name) {
    try {
      const result = await pg.oneOrNone('select * from books where name = $1', [name]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async add(book) {
    const timeStamp = Builder.toPostgresTimestamp();
    try {
      await pg.none('insert into books(name, description, created_at, updated_at) values($1, $2, $3, $4)',
        [book.name, book.description, timeStamp, timeStamp]);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async update(book) {
    const timeStamp = Builder.toPostgresTimestamp();
    try {
      await pg.none('update books set name = $1, qty = $2, description = $3, updated_at = $4 where bookid = $5;',
        [book.name, book.qty, book.description, timeStamp, book.id]);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default BookModel;
