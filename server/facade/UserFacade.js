import _ from 'lodash';
import UserModel from '../models/UserModel';

class UserFacade {
  constructor() {
    this.userModel = new UserModel();
  }

  async add(user) {
    if (_.isEmpty(user)) return 'No input specified';
    if (_.isEmpty(user.username)) return 'Please input username';
    if (_.isEmpty(user.password)) return 'Please input password';

    const userData = await this.userModel.getOneByUsername(user.username);
    if (!_.isEmpty(userData)) return 'Username already exists';

    return true;
  }
}

export default UserFacade;
