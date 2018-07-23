import pg from './base/db';
import Builder from '../library/Builder';

class UserModel {
  static async getOneById(id) {
    try {
      const result = await pg.oneOrNone('select * from users where bookid = $1', [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getOneByUsername(username) {
    try {
      const result = await pg.oneOrNone('select * from users where username = $1', [username]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      return await pg.any('select * from users order by username');
    } catch (error) {
      throw error;
    }
  }

  static async add(user) {
    const timeStamp = Builder.toPostgresTimestamp();
    try {
      await pg.none('insert into users(username, password, created_at, updated_at) values($1, $2, $3, $4)', [user.username, user.password, timeStamp, timeStamp]);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default UserModel;
