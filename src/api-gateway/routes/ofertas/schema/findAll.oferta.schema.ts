import { FastifySchema } from "fastify";

export const findAllOfertaSchema: FastifySchema = {
    tags: ['Ofertas'],
    summary: 'Listar todas las ofertas académicas',
    description: 'Endpoint para listar todas las ofertas académicas',
    response: {
        200: {
            description: 'Ofertas encontradas',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    idOferta: { type: 'number' },
                    idPrograma: { type: 'number' },
                    turno: { type: 'string' },
                    espacios: { type: 'number' }, 
                    idPeriodo: { type: 'string' },
                    estado: { type: 'string' },
                }
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