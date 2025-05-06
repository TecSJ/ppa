import { FastifySchema } from "fastify";
import { oferta } from "./propeties/oferta";

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
                    ...oferta,
                    programa: {
                        type: 'object',
                        properties: {
                            idPrograma: { type: 'number' },
                            codigo: { type: 'string' },
                            nombre: { type: 'string' },
                            idPlantel: { type: 'string' }
                        },
                    },
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