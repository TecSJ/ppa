import { asignaturaHandlers } from '../../adapters'
import {
    createAsignaturaSchema,
    deleteAsignaturaSchema,
    findAllAsignaturasSchema,
    findOneAsignaturaSchema,
    updateAsignaturaSchema
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
                ...createAsignaturaSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        asignaturaHandlers.createAsignaturaHandler
    );

    fastify.delete(
        '/:idAsignatura',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...deleteAsignaturaSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        asignaturaHandlers.deleteAsignaturaHandler
    );

    fastify.get(
        '/fa',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...findAllAsignaturasSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        asignaturaHandlers.findAllAsignaturaHandler
    );

    fastify.get(
        '/fo/:idAsignatura',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...findOneAsignaturaSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        asignaturaHandlers.findOneAsignaturaHandler
    );

    fastify.patch(
        '/:idAsignatura',
        {
            preHandler: fastify.authenticate,
            schema:{
                ...updateAsignaturaSchema,
                security: [{ BearerAuth: [] }]
            },
        },
        asignaturaHandlers.updateAsignaturaHandler
    );
}


export default Router;
