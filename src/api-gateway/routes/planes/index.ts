import { planHandlers } from '../../adapters'
import {
    findOnePlanSchema,
} from './schema'
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';


declare module 'fastify' {
    interface FastifyInstance {
      authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }
};

function Router(fastify: FastifyInstance): void{

    fastify.get(
        '/:idPlan',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...findOnePlanSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        planHandlers.findOnePlanHandler,
    );

}


export default Router;
