import pgp from 'pg-promise';

const config = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
};

const pg = pgp({
  connect(client) {
    const cp = client.connectionParameters;
    console.log('Connected to database:', cp.database);
  }
})(config);

export default pg;
