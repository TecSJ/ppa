import { FastifySchema } from "fastify";
import { asignatura } from "./propeties/asignatura"

export const findOneAsignaturaSchema: FastifySchema = {
    tags: ['Asignaturas'],
    summary: 'Buscar una Asignatura',
    description: 'Endpoint para buscar una Asignatura',
    params: {
        required: ['idAsignatura'],
        type: 'object',
        properties: {
            idAsignatura: { type: 'number' },
        },
    },
    response: {
        200: {
            description: 'Asignatura encontrada',
            type: 'object',
            properties: {
                idAsignatura: {
                    type: 'integer'
                },
                ...asignatura
            }
        },
        404: {
            description: 'Asignatura no encontrada',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}
