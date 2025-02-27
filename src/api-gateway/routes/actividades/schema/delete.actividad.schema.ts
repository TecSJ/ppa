import { FastifySchema } from "fastify";

export const deleteActividadSchema: FastifySchema = {
    tags: ['Actividades'],
    summary: 'Eliminar una actividad',
    description: 'Endpoint para eliminar una actividad',
    params: {
        type: 'object',
        required: ['idActividad'],
        properties: {
            idActividad: { type: 'number' },
        },
    },
    response: {
        200: {
            description: 'Actividad eliminada',
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
        404: {
            description: 'Actividad no encontrada',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
            },
        },
    },
}