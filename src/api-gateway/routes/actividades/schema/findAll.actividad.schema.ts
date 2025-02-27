import { FastifySchema } from "fastify";

export const findAllActividadesSchema: FastifySchema = {
    tags: ['Actividades'],
    summary: 'Listar todas las actividades',
    description: 'Endpoint para listar todas las actividades',
    response: {
        200: {
            description: 'Actividades encontradas',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    idActividad: { type: 'number' },
                    nombre: { type: 'string' },
                },
            },
        },
        404: {
            description: 'No se encontraron actividades',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}