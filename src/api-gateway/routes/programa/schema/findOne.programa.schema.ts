import { FastifySchema } from "fastify";
import { programa } from "./properties/programa";

export const findOneProgramaSchema: FastifySchema = {
    tags: ['Programas'],
    summary: 'Buscar un programa',
    description: 'Endpoint para buscar un programa',
    params: {
        required: ['idPrograma'],
        type: 'object',
        properties: {
            idPrograma: { type: 'number' },
        },
    },
    response: {
        200: {
            description: 'Plan de estudio encontrado',
            type: 'object',
            properties: {
                idPlan: { type: 'number' },
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
