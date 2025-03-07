import { moduloHandlers } from '../../adapters'
import {
    createModuloSchema,
    findAllModulosSchema,
    findOneModuloSchema,
    updateModuloSchema
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
            //preHandler: fastify.authenticate,
            schema:{
                ...createModuloSchema,
                //security: [{ BearerAuth: [] }]
            },
        },
        moduloHandlers.createModuloHandler
    );

    fastify.get(
        '/fa',
        {
            //preHandler: fastify.authenticate,
            schema:{
                ...findAllModulosSchema,
                //security: [{ BearerAuth: [] }]
            },
        },
        moduloHandlers.findAllModuloHandler
    );

    fastify.get(
        '/fo/:idModulo',
        {
            //preHandler: fastify.authenticate,
            schema:{
                ...findOneModuloSchema,
                //security: [{ BearerAuth: [] }]
            },
        },
        moduloHandlers.findOneModuloHandler
    );

    fastify.patch(
        '/:idModulo',
        {
            //preHandler: fastify.authenticate,
            schema:{
                ...updateModuloSchema,
                //security: [{ BearerAuth: [] }]
            },
        },
        moduloHandlers.updateModuloHandler
    );
}


export default Router;
