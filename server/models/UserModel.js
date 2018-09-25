import BaseModel from './base/BaseModel';

class UserModel extends BaseModel {
  async getOneById(id) {
    try {
      const result = await this.db.oneOrNone('select * from users where bookid = $1', [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getOneByUsername(username) {
    try {
      const result = await this.db.oneOrNone('select * from users where username = $1', [username]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      return await this.db.any('select * from users order by username');
    } catch (error) {
      throw error;
    }
  }

  async add(user) {
    const timeStamp = this.builder.toPostgresTimestamp();
    try {
      await this.db.none('insert into users(username, password, created_at, updated_at) values($1, $2, $3, $4)', [user.username, user.password, timeStamp, timeStamp]);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default UserModel;
