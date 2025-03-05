import { FastifySchema } from "fastify";
import { programa } from "./properties/programa";

export const findAllProgramaSchema: FastifySchema = {
    tags: ['Programas'],
    summary: 'Listar todos los Programas',
    description: 'Endpoint para listar todos los Programas',
    response: {
        200: {
            description: 'Programas encontrados',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    ...programa
                }
            },
        },
        404: {
            description: 'No se encontraron Programas',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    }
}