import { ofertaHandlers } from '../../adapters'
import {
    createOfertaSchema,
    deleteOfertaSchema,
    findAllOfertaSchema,
    findOneOfertaSchema,
    updateOfertaSchema
} from './schema'
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';


declare module 'fastify' {
    interface FastifyInstance {
      authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }
};

function Router(fastify: FastifyInstance): void{

    fastify.post(
        '/',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...createOfertaSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        ofertaHandlers.createOfertaHandler
    );

    fastify.delete(
        '/:idOferta',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...deleteOfertaSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        ofertaHandlers.deleteOferttaHandler
    );

    fastify.get(
        '/',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...findAllOfertaSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        ofertaHandlers.findAllOfertasHandler
    );

    fastify.get(
        '/:idOferta',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...findOneOfertaSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        ofertaHandlers.findOneOfertaHandler
    );

    fastify.patch(
        '/:idOferta',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...updateOfertaSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        ofertaHandlers.updateOfertaHandler
    );
}


export default Router;
