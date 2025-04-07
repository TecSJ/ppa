import { FastifySchema } from 'fastify';
import { reticula } from './properties/reticula'

export const updateReticulaSchema: FastifySchema = {
    tags: ['Reticula'],
    summary: 'Actualizar una Retícula',
    description: 'Endpoint para actualizar una Retícula',
    params: {
        required: ['idReticula'],
        type: 'object',
        properties: {
            idReticula: { type: 'number' },
        },
    },
    body: {
        type: 'object',
        properties: {
            ...reticula,
        },
    },
    response: {
        200: {
            description: 'Retícula actualizado',
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