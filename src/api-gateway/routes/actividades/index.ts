
import { actividadHandlers } from '../../adapters'
import {
    createActividadSchema,
} from './schema'
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';


declare module 'fastify' {
    interface FastifyInstance {
      authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }
};

function Router(fastify: FastifyInstance): void{

    fastify.post(
        '/create',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...createActividadSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        actividadHandlers.createActividadHandler
    );

}


export default Router;