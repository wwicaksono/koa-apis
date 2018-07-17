import user from '../models/UserModel';

const userController = {};

userController.get = async (ctx) => {
  const data = await user.get(ctx.params.id);
  if (data) {
    ctx.body = data;
  } else {
    ctx.body = 'error';
  }
}

export default userController;
