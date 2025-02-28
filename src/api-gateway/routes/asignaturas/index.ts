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
        '/create',
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
        '/delete/:idAsignatura',
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
        '/findAll',
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
        '/findOne/:idAsignatura',
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
        '/update/:idAsignatura',
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
