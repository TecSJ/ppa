import { FastifySchema } from 'fastify';
import { asignatura } from './propeties/asignatura'

export const createAsignaturaSchema: FastifySchema = {
    tags: ['Asignaturas'],
    summary: 'Crear una Asignatura',
    description: 'Endpoint para crear una Asignatura',
    body: {
        type: 'object',
        required: ['nombre'],
        properties: asignatura,
    },
    response: {
        200: {
            description: 'Asignatura creada',
            type: 'object',
            properties: asignatura
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