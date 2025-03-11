import { FastifySchema } from "fastify";

export const findOneActividadesSchema: FastifySchema = {
    tags: ['Actividades'],
    summary: 'Buscar una actividad',
    description: 'Endpoint para buscar una actividad',
    params: {
        required: ['idActividad'],
        type: 'object',
        properties: {
            idActividad: { type: 'number' },
        },
    },
    response: {
        200: {
            description: 'Actividad encontrada',
            type: 'object',
            properties: {
                idActividad: { type: 'number' },
                nombre: { type: 'string' },
            },
        },
        404: {
            description: 'Actividad no encontrada',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}
