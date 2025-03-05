import { FastifySchema } from 'fastify';
import { plan } from './properties/plan'

export const createPlanSchema: FastifySchema = {
    tags: ['Planes'],
    summary: 'Crear un Plan de Estudio',
    description: 'Endpoint para crear un Plan de Estudio',
    body: {
        type: 'object',
        required: ['idPrograma'],
        properties: {
            ...plan,
        },
    },
    response: {
        200: {
            description: 'Plan de estudio creado',
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