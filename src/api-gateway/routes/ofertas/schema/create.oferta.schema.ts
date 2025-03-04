import { FastifySchema } from 'fastify';
import { oferta } from './propeties/oferta';

export const createOfertaSchema: FastifySchema = {
    tags: ['Oferta'],
    summary: 'Crear una oferta académica',
    description: 'Endpoint para crear una nueva oferta académica',
    body: {
        type: 'object',
        required: ['idPrograma', 'turno', 'espacios', 'idPeriodo'], 
        properties: oferta,
    },
    response: {
        200: {
            description: 'Oferta creada exitosamente',
            type: 'object',
            properties: {
                idOferta: { type: 'number' },
                idPrograma: { type: 'number' },
                turno: { type: 'string' },
                espacios: { type: 'number' }, 
                idPeriodo: { type: 'string' },
                estado: { type: 'string' },
            },
        },
        400: {
            description: 'Solicitud inválida',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
            },
        },
        500: {
            description: 'Error interno del servidor',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
            },
        },
    },
};