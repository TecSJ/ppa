import { moduloHandler } from '../../adapters'
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
            '/:idPlan',
            {
                //preHandler: fastify.authenticate,
                schema:{
                    ...createModuloSchema,
                    //security: [{ BearerAuth: [] }]
                },
            },
            moduloHandler.createModuloHandler
        );
    
        fastify.get(
            '/',
            {
                //preHandler: fastify.authenticate,
                schema:{
                    ...findAllModulosSchema
                    //security: [{ BearerAuth: [] }]
    
                },
            },
            moduloHandler.findAllModuloHandler
        )
        
        fastify.get(
            '/:idModulo',
            {
                //preHandler: fastify.authenticate,
                schema:{
                    ...findOneModuloSchema
                    //security: [{ BearerAuth: [] }]
    
                },
            },
            moduloHandler.findOneModuloHandler
        )

        fastify.patch(
            '/:idModulo',
            {
                //preHandler: fastify.authenticate,
                schema:{
                    ...updateModuloSchema
                    //security: [{ BearerAuth: [] }]
    
                },
            },
            moduloHandler.updateModuloHandler
        )

}


export default Router;
