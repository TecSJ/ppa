import { FastifySchema } from "fastify";

export const deleteOfertaSchema: FastifySchema = {
    tags: ['Ofertas'],
    summary: 'Cancela una oferta académica',
    description: 'Endpoint para cancelar una oferta académica',
    params: {
        type: 'object',
        required: ['idOferta'],
        properties: {
            idOferta: { type: 'number' },
        },
    },
    response: {
        200: {
            description: 'Oferta académica cancelada!',
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
        404: {
            description: 'Oferta académica no encontrada',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
            },
        },
    },
}