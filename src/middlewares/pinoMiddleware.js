import pino from 'pino-http';

export const pinoMiddleware = () => {
  return pino({
    transport: {
      target: 'pino-pretty',
    },
  });
};
