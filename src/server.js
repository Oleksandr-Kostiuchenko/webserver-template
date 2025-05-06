//* Express
import express from 'express';

//* Middlewares
import { parserMiddleware } from './middlewares/parserMiddleware.js';
import { corsMiddleware } from './middlewares/corsMiddleWare.js';
import { pinoMiddleware } from './middlewares/pinoMiddleware.js';
import { logTimeMiddleware } from './middlewares/logTimeMiddleware.js';
import { responseMiddleware } from './middlewares/responseMiddlware.js';
import { pathErrorMiddleWare } from './middlewares/pathErrorMiddleware.js';
import { mainErrorMiddleware } from './middlewares/mainErrorMiddleware.js';

//* PORT
import { getEnvVar } from './utils/getEnvVar.js';
const PORT = Number(getEnvVar('PORT', 3000));

export const startServer = () => {
  const app = express();

  app.use(parserMiddleware());

  app.use(corsMiddleware());

  app.use(pinoMiddleware());

  app.use(logTimeMiddleware);

  app.get('/', responseMiddleware);

  app.use(pathErrorMiddleWare);

  app.use(mainErrorMiddleware);

  app.listen(PORT, () => {
    console.log(`Server started on ${PORT} PORT!`);
  });
};
