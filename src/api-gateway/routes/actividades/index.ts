import { actividadHandlers } from '../../adapters'
import {
    createActividadSchema,
    deleteActividadSchema,
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

    fastify.delete(
        '/delete/:idActividad',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...deleteActividadSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        actividadHandlers.deleteActividadHandler
    );

}


export default Router;
