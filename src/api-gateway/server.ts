// src/api-gateway/server.ts
import fastify from 'fastify';

const server = fastify();

server.get('/', async (request, reply) => {
    return { message: 'Hola Mundo' };
});

export const startServer = async () => {
    try {
        await server.listen({ port: 3005 });
        console.log('Server is running on http://localhost:3005');
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

export default server;
