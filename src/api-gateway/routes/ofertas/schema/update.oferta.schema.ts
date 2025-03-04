import { FastifySchema } from "fastify";
import { oferta } from "./propeties/oferta";

export const updateOfertaSchema: FastifySchema = {
    tags: ['Ofertas'],
    summary: 'Actualizar una oferta académica',
    description: 'Endpoint para actualizar una oferta académica',
    params: {
        required: ['idOferta'],
        type: 'object',
        properties: {
            idOferta: { type: 'number' },
        },
    },
    body: {
        type: 'object',
        properties: oferta, // Usamos el esquema de oferta que definiste anteriormente
    },
    response: {
        200: {
            description: 'Oferta actualizada exitosamente',
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
        404: {
            description: 'Oferta no encontrada',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
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