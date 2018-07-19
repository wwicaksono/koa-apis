import moment from 'moment';

const builder = {};

builder.toPostgresTimestamp = () => moment(new Date(), 'yyyy-mm-dd HH:MM:ss');

export default builder;
