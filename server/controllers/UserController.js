import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel';
import UserFacade from '../facade/UserFacade';

class UserController {
  static async get(ctx) {
    const data = await UserModel.get(ctx.params.id);
    if (data) {
      ctx.body = data;
    } else {
      ctx.body = 'error';
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
