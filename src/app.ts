import Fastify, { FastifyServerOptions } from 'fastify';

export function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify({
    logger: options.logger ?? true,
    ...options
  });

  app.get('/', async () => {
    return {
      message: 'Broken CI demo message',
      version: process.env.APP_VERSION || 'dev'
    };
  });

  app.get('/health', async () => {
    return {
      status: 'ok'
    };
  });

  return app;
}
