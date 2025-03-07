import { FastifySchema } from "fastify";
import { modulo } from "./propeties/modulo";

export const updateModuloSchema: FastifySchema = {
    tags: ['Modulos'],
    summary: 'Actualizar una Modulo',
    description: 'Endpoint para actualizar una Modulo',
    params: {
        required: ['idModulo'],
        type: 'object',
        properties: {
            idModulo: { type: 'number' },
        },
    },
    body: {
        type: 'object',
        properties: modulo
    },
    response: {
        200: {
            description: 'Modulo actualizada',
            type: 'object',
            properties: {
                idModulo: {
                    type: 'integer'
                },
                ...modulo
            }
        },
        404: {
            description: 'Modulo no encontrada',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}
