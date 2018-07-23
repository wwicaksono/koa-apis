import moment from 'moment';

class Builder {
  static toPostgresTimestamp() {
    return moment(new Date(), 'yyyy-mm-dd HH:MM:ss');
  }
}

export default Builder;
