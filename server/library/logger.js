import logger from 'koa-pino-logger';

const pinoLogger = logger({
  // extreme: true,
  level: (process.env.NODE_ENV === 'production' ? 'warn' : 'debug'),
});

export default pinoLogger;
