import { FastifySchema } from "fastify";
import { plan } from "./properties/plan"

export const findOnePlanSchema: FastifySchema = {
    tags: ['Planes'],
    summary: 'Buscar un plan de estudio',
    description: 'Endpoint para buscar un plan de estudio',
    params: {
        required: ['idPlan'],
        type: 'object',
        properties: {
            idPlan: { type: 'number' },
        },
    },
    response: {
        200: {
            description: 'Plan de estudio encontrado',
            type: 'object',
            properties: {
                idPlan: { type: 'number' },
                ...plan,
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
