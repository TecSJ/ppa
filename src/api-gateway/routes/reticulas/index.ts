import { reticulaHandlers } from '../../adapters'
import {
    findOneReticulaSchema,
    findAllReticulasSchema,
    createReticulaSchema,
    updateReticulaSchema,
} from './schema'
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';


declare module 'fastify' {
    interface FastifyInstance {
      authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }
};

function Router(fastify: FastifyInstance): void {

    fastify.get(
        '/:idReticula',
        {
            // preHandler: fastify.authenticate,
            schema:{
                ...findOneReticulaSchema,
                // security: [{ BearerAuth: [] }]
            },
        },
        reticulaHandlers.findOneReticulaHandler,
    );

    fastify.get(
        '/',
        {
            // preHandler: fastify.authenticate,
            schema:{
                ...findAllReticulasSchema,
                // security: [{ BearerAuth: [] }]
            },
        },
        reticulaHandlers.findAllReticulasHandler,
    );

    fastify.post(
        '/',
        {
            // preHandler: fastify.authenticate,
            schema:{
                ...createReticulaSchema,
                // security: [{ BearerAuth: [] }]
            },
        },
        reticulaHandlers.createReticulaHandler,
    );

    fastify.patch(
        '/:idReticula',
        {
            // preHandler: fastify.authenticate,
            schema:{
                ...updateReticulaSchema,
                // security: [{ BearerAuth: [] }]
            },
        },
        reticulaHandlers.updateReticulaHandler,
    );

}


export default Router;
