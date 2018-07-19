import 'dotenv/config';
import Koa from 'koa';
import logger from 'koa-pino-logger';
import bodyParser from 'koa-bodyparser';
import router from './router';

const app = new Koa();
// app.silent = true;

app.use(logger({
  // prettyPrint: true,
  // extreme: true,
  level: 'debug',
}));

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

process.on('unhandledRejection', (err) => {
  logger.error(err);
});

app.listen(3000);
