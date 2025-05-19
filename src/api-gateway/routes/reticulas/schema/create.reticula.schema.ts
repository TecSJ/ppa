import { FastifySchema } from 'fastify';
import { reticula } from './properties/reticula'

export const createReticulaSchema: FastifySchema = {
    tags: ['Reticulas'],
    summary: 'Crear una Retícula',
    description: 'Endpoint para crear una Retícula',
    body: {
        type: 'object',
        required: ['idPlan', 'idAsignatura'],
        properties: {
            ...reticula,
        },
    },
    response: {
        200: {
            description: 'Retícula creada',
            type: 'object',
            properties: {
                idReticula: { type: 'integer' },
                ...reticula,
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