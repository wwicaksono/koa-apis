import _ from 'lodash';

class UserFacade {
  static add(user) {
    if (_.isEmpty(user)) return 'No input specified';
    if (_.isEmpty(user.username)) return 'Please input username';
    if (_.isEmpty(user.password)) return 'Please input password';

    return true;
  }
}

export default UserFacade;
