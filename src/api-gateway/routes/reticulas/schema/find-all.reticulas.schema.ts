import { FastifySchema } from "fastify";
import { reticula } from "./properties/reticula";
import { asignatura } from "./properties/asignatura";

export const findAllReticulasSchema: FastifySchema = {
    tags: ['Reticulas'],
    summary: 'Buscar la lista de Retículas',
    description: 'Endpoint para listar todos las Retículas',
    response: {
        200: {
            description: 'Retículas encontradas',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    idReticula: {
                        type: 'integer'
                    },
                    ...reticula,
                    asignatura: {
                        type: 'object',
                        properties: {
                            ...asignatura,
                        },
                    }
                }
            },
        },
        404: {
            description: 'Retículas no encontradas',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}
