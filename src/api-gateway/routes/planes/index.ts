import { planHandlers } from '../../adapters'
import {
    findOnePlanSchema,
    findAllPlanesSchema,
    createPlanSchema,
    updatePlanSchema,
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

    fastify.get(
        '/',
        {
            //preHandler: fastify.authenticate,
            schema:{
                ...findAllPlanesSchema,
                //security: [{ BearerAuth: [] }]
            },
        },
        planHandlers.findAllPlanesHandler,
    );

    fastify.post(
        '/',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...createPlanSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        planHandlers.createPlanHandler,
    );

    fastify.patch(
        '/:idPlan',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...updatePlanSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        planHandlers.updatePlanHandler,
    );

}


export default Router;
