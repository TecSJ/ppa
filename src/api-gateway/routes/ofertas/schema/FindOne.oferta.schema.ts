import { FastifySchema } from "fastify";

export const findOneOfertaSchema: FastifySchema = {
    tags: ['Ofertas'],
    summary: 'Buscar una oferta académica',
    description: 'Endpoint para buscar una oferta académica',
    params: {
        required: ['idOferta'],
        type: 'object',
        properties: {
            idOferta: { type: 'number' },
        },
    },
    response: {
        200: {
            description: 'Oferta encontrada',
            type: 'object',
            properties:  {
                idOferta: { type: 'number' },
                idPrograma: { type: 'number' },
                turno: { type: 'string' },
                espacios: { type: 'number' }, 
                idPeriodo: { type: 'string' },
                estado: { type: 'string' },
            },
        },
        404: {
            description: 'Oferta no encontrada',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}
