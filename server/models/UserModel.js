import pg from './base/db';
import builder from '../library/builder';

class UserModel {
  static async getOne(id) {
    try {
      const result = await pg.oneOrNone('select * from users where id = $1', [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      return await pg.any('select * from users');
    } catch (error) {
      throw error;
    }
  }

  static async add(user) {
    const timeStamp = builder.toPostgresTimestamp();
    try {
      await pg.none('insert into users(username, password, created_at, updated_at) values($1, $2, $3, $4)', [user.username, user.password, timeStamp, timeStamp]);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default UserModel;
