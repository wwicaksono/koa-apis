import moment from 'moment';

class builder {
  static toPostgresTimestamp() {
    return moment(new Date(), 'yyyy-mm-dd HH:MM:ss');
  }
}

export default builder;
