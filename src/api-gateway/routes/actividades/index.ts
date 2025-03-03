import { actividadHandlers } from '../../adapters'
import {
    createActividadSchema,
    deleteActividadSchema,
    findAllActividadesSchema,
    findOneActividadesSchema,
    updateActividadesSchema
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
                ...createActividadSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        actividadHandlers.createActividadHandler
    );

    fastify.delete(
        '/:idActividad',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...deleteActividadSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        actividadHandlers.deleteActividadHandler
    );

    fastify.get(
        '/fa',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...findAllActividadesSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        actividadHandlers.findAllActividadHandler
    );

    fastify.get(
        '/fo/:idActividad',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...findOneActividadesSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        actividadHandlers.findOneActividadHandler
    );

    fastify.patch(
        '/:idActividad',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...updateActividadesSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        actividadHandlers.updateActividadHandler
    );
}


export default Router;
