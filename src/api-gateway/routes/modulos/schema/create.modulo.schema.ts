import { FastifySchema } from 'fastify';
import { modulo } from './propeties/modulo'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { estado, ...Modulo } = modulo;

export const createModuloSchema: FastifySchema = {
    tags: ['Modulos'],
    summary: 'Crear una modulo',
    description: 'Endpoint para crear una modulo',
    body: {
        type: 'object',
        required: ['nombre'],
        properties: Modulo,
    },
    response: {
        200: {
            description: 'modulo creada',
            type: 'object',
            properties: Modulo
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