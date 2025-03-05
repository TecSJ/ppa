import { FastifySchema } from "fastify";
import { plan } from "./properties/plan"

export const findAllPlanesSchema: FastifySchema = {
    tags: ['Planes'],
    summary: 'Buscar la lista plan de estudios',
    description: 'Endpoint para listar todos los planes de estudio',
    response: {
        200: {
            description: 'Planes de estudio encontrados',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    idPlan: {
                        type: 'integer'
                    },
                    ...plan,
                }
            },
        },
        404: {
            description: 'Plan de estudio no encontrada',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}
