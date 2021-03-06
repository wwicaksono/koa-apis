import pgp from 'pg-promise';

const config = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
};

const dbUrl = process.env.DATABASE_URL;

const pg = pgp({
  connect(client) {
    const cp = client.connectionParameters;
    console.log('Connected to database:', cp.database);
  },
  disconnect(client) {
    const cp = client.connectionParameters;
    console.log('Disconnecting from database:', cp.database);
  },
})(process.env.NODE_ENV === 'production' ? dbUrl : config);

export default pg;
