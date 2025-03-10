import { FastifySchema } from "fastify";
import { programa } from "./properties/programa";

export const updateProgramaSchema: FastifySchema = {
    tags: ['Programas'],
    summary: 'actualizar un programa',
    description: 'Endpoint para actualizar un programa',
    params: {
        required: ['idPrograma'],
        type: 'object',
        properties: {
            idPrograma: { type: 'number' },
        },
    },
    body: {
        type: 'object',
        properties: {
            ...programa
        }
    },
    response: {
        200: {
            description: 'Programa no encontrado',
            type: 'object',
            properties: {
                ...programa,
            },
        },
        404: {
            description: 'programa no encontrado',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}