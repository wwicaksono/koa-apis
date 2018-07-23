import 'dotenv/config';
import 'babel-core/register';
import 'babel-polyfill';
import Koa from 'koa';
import pinoLogger from 'koa-pino-logger';
import bodyParser from 'koa-bodyparser';
import responseHandler from 'koa-response-handler';
import router from './router';

const app = new Koa();
const logger = pinoLogger({
  // prettyPrint: true,
  // extreme: true,
  level: 'debug',
});
const port = process.env.PORT || 3000;
// app.silent = true;

app.use(logger);

app.use(responseHandler({ contentType: 'application/json' }));
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

process.on('unhandledRejection', (err) => {
  throw err;
});

app.listen(port, () => {
  console.log(`koa-apis run on port: ${port}`);
});
