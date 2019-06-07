import 'dotenv/config';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import responseHandler from 'koa-response-handler';
import pinoLogger from './library/logger';
import router from './router';

const app = new Koa();
const port = process.env.PORT || 3000;
// app.silent = true;

app.use(pinoLogger);

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
