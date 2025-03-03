import { competenciaHandler } from '../../adapters'
import {
    createCompetenciaSchema
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
                    ...createCompetenciaSchema,
                    //security: [{ BearerAuth: [] }]
                },
            },
            competenciaHandler.createCompetenciaHandler
        );
    
}


export default Router;
