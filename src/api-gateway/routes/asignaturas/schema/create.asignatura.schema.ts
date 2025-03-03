import { FastifySchema } from 'fastify';
import { asignatura } from './propeties/asignatura'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { estado, ...Asignatura } = asignatura;

export const createAsignaturaSchema: FastifySchema = {
    tags: ['Asignaturas'],
    summary: 'Crear una Asignatura',
    description: 'Endpoint para crear una Asignatura',
    body: {
        type: 'object',
        required: ['nombre'],
        properties: Asignatura,
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