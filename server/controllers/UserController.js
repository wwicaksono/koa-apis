import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel';
import UserFacade from '../facade/UserFacade';

class UserController {
  constructor() {
    this.userModel = new UserModel();
    this.userFacade = new UserFacade();
  }

  async get(ctx) {
    let data;
    if (ctx.params.id) {
      data = await this.userModel.getOneById(ctx.params.id);
    } else {
      data = await this.userModel.getAll();
    }

    if (data) {
      ctx.response.ok(data);
    } else {
      ctx.response.notFound(JSON.stringify('user not found'));
    }
  }

  async add(ctx) {
    const reqBody = ctx.request.body;
    const addValidation = await this.userFacade.add(reqBody);
    if (addValidation === true) {
      const hashedPassword = await bcrypt.hash(reqBody.password, 5);
      const user = {
        username: reqBody.username,
        password: hashedPassword,
      };
      const insertResult = await this.userModel.add(user);

      if (insertResult) {
        ctx.response.ok(JSON.stringify('success'));
      } else {
        ctx.response.badRequest(JSON.stringify('failed'));
      }
    } else {
      ctx.response.badRequest(JSON.stringify(addValidation));
    }
  }
}

export default UserController;
