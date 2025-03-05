import { FastifySchema } from 'fastify';
import { plan } from './properties/plan'

export const updatePlanSchema: FastifySchema = {
    tags: ['Planes'],
    summary: 'Actualizar un Plan de Estudio',
    description: 'Endpoint para actualizar un Plan de Estudio',
    params: {
        required: ['idPlan'],
        type: 'object',
        properties: {
            idPlan: { type: 'number' },
        },
    },
    body: {
        type: 'object',
        properties: {
            ...plan,
        },
    },
    response: {
        200: {
            description: 'Plan de estudio actualizado',
            type: 'object',
            properties: {
                idPlan: { type: 'integer' },
                ...plan,
            },
        },
        400: {
            description: 'Solicitud Invalida',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
            },
        },
    },    
}