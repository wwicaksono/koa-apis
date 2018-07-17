import pg from './base/db';

const user = {};

user.get = async (id) => {
  try {
    const result = await pg.oneOrNone('select * from users where id = $1', [id]);
    return result;
  } catch (error) {
    throw error;
  }
};

export default user;
