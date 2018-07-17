import 'dotenv/config';
import Koa from 'koa';
import router from './router';

const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());

process.on('unhandledRejection', (err) => {
  console.error(err.stack);
  // process.exit(1);
});

app.listen(3000);
