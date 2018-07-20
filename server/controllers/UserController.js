import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel';
import UserFacade from '../facade/UserFacade';

class UserController {
  static async get(ctx) {
    let data;
    if (ctx.params.id) {
      data = await UserModel.getOne(ctx.params.id);
    } else {
      data = await UserModel.getAll();
    }

    if (data) {
      ctx.response.ok(data);
    } else {
      ctx.response.notFound(JSON.stringify('user not found'));
    }
  }

  static async add(ctx) {
    const reqBody = ctx.request.body;
    const addValidation = UserFacade.add(reqBody);
    if (addValidation === true) {
      const hashedPassword = await bcrypt.hash(reqBody.password, 5);
      const user = {
        username: reqBody.username,
        password: hashedPassword,
      };
      const insertResult = await UserModel.add(user);

      if (insertResult) {
        ctx.body = 'inserted';
        return;
      }
      ctx.body = 'failed';
    }
    ctx.body = addValidation;
  }
}

export default UserController;
