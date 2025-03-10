import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { carreraHandlers } from 'api-gateway/adapters/programas/handlers';
import { 
    findAllProgramaSchema,
    createProgramaSchema, 
    findOneProgramaSchema,
    updateProgramaSchema
} from './schema/';

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
                ...createProgramaSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        carreraHandlers.createProgramaHandler
    )

    fastify.get(
        '/fa', 
        {
            preHandler: fastify.authenticate,
            schema:{
                ...findAllProgramaSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        carreraHandlers.findAllProgramasHandler
    );

    fastify.get(
        '/:idPrograma',
        {
            preHandler: fastify.authenticate,
            schema: {
                ...findOneProgramaSchema,
                security: [{ BearerAuth: [] }]
            }
        },
        carreraHandlers.findOneProgramaHandler
    )

    fastify.patch(
        '/:idPrograma',
        {
            preHandler: fastify.authenticate,
            schema: {
                ...updateProgramaSchema,
                security: [{ BearerAuth: [] }]
            }
        },
        carreraHandlers.updateProgramaHandler
    )
}

export default Router;