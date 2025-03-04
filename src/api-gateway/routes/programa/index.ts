import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { carreraHandlers } from 'api-gateway/adapters/programas/handlers';


declare module 'fastify' {
    interface FastifyInstance {
      authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }
};

function Router(fastify: FastifyInstance): void{

    fastify.get(
        '/fa', 
        {
            preHandler: fastify.authenticate,
            schema:{
                security: [{ BearerAuth: [] }]
            },
        },
        carreraHandlers.findAllProgramasHandler
    );
}

export default Router;