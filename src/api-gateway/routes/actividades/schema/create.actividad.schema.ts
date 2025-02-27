import { FastifySchema } from 'fastify';
import { actividad } from './propeties/actividad'

export const createActividadSchema: FastifySchema = {
    tags: ['Actividades'],
    summary: 'Crear una actividad',
    description: 'Endpoint para crear una actividad',
    body: {
        type: 'object',
        required: ['nombre'],
        properties: actividad,
    },
    response: {
        200: {
            description: 'Actividad creada',
            type: 'object',
            properties: {
                idActividad: { type: 'number' },
                nombre: { type: 'string' },
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