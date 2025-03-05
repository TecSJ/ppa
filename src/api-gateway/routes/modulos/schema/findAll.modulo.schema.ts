import { FastifySchema } from "fastify";
import { modulo } from "./propeties/modulo"

export const findAllModulosSchema: FastifySchema = {
    tags: ['Modulos'],
    summary: 'Listar todas las Modulos',
    description: 'Endpoint para listar todas las Moduloes',
    response: {
        200: {
            description: 'Moduloes encontradas',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    idModulo: {
                        type: 'integer'
                    },
                    ...modulo
                }
            },
        },
        404: {
            description: 'No se encontraron Moduloes',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}