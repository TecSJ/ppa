import Fastify, { FastifyInstance } from 'fastify';
import AutoLoad from '@fastify/autoload';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import sequelize from 'models/config/database';

dotenv.config();

export const createServer = async (): Promise<FastifyInstance> => {
  await sequelize.sync({ force: false, alter: false });

  const isProduction = process.env.NODE_ENV === 'production';

  let fastify: FastifyInstance;

  if (isProduction) {
    const httpsOptions = {
      key: fs.readFileSync(path.join(__dirname, 'server.key')),
      cert: fs.readFileSync(path.join(__dirname, 'server.cert')),
    };

    fastify = Fastify({ logger: true, https: httpsOptions });
  } else {
    fastify = Fastify({ logger: true });
  }

  await fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
  });

  await fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    ignorePattern: /.*(schema).*/,
    options: { prefix: '/api' },
  });

  return fastify;
};

if (require.main === module) {
  (async () => {
    try {
      const fastify = await createServer();
      const PORT = process.env.PORT 
        ? parseInt(process.env.PORT, 10) 
        : process.env.NODE_ENV === 'production' ? 443 : 3005;

      await fastify.listen({ port: PORT, host: '0.0.0.0' });
      console.log(`✅ Servidor corriendo en ${process.env.NODE_ENV === 'production' ? 'HTTPS' : 'HTTP'} en el puerto ${PORT}`);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })();
}
