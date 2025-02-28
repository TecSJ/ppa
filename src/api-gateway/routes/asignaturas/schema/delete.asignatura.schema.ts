import { FastifySchema } from "fastify";

export const deleteAsignaturaSchema: FastifySchema = {
    tags: ['Asignaturas'],
    summary: 'Eliminar una Asignatura',
    description: 'Endpoint para eliminar una Asignatura',
    params: {
        type: 'object',
        required: ['idAsignatura'],
        properties: {
            idAsignatura: { type: 'number' },
        },
    },
    response: {
        200: {
            description: 'Asignatura eliminada',
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
        404: {
            description: 'Asignatura no encontrada',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
            },
        },
    },
}