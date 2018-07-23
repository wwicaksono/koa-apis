import 'dotenv/config';
import 'babel-core/register';
import 'babel-polyfill';
import Koa from 'koa';
import logger from 'koa-pino-logger';
import bodyParser from 'koa-bodyparser';
import responseHandler from 'koa-response-handler';
import router from './router';

const app = new Koa();
// app.silent = true;

app.use(logger({
  // prettyPrint: true,
  // extreme: true,
  level: 'debug',
}));

app.use(responseHandler({ contentType: 'application/json' }));
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

process.on('unhandledRejection', (err) => {
  logger.error(err);
});

app.listen(5000);
