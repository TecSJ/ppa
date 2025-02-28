import { FastifySchema } from "fastify";
import { asignatura } from "./propeties/asignatura";

export const updateAsignaturaSchema: FastifySchema = {
    tags: ['Asignaturas'],
    summary: 'Actualizar una Asignatura',
    description: 'Endpoint para actualizar una Asignatura',
    params: {
        required: ['idAsignatura'],
        type: 'object',
        properties: {
            idAsignatura: { type: 'number' },
        },
    },
    body: {
        type: 'object',
        properties: asignatura
    },
    response: {
        200: {
            description: 'Asignatura actualizada',
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
