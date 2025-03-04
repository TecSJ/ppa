import { moduloHandler } from '../../adapters'
import {
    createModuloSchema
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
    
}


export default Router;
