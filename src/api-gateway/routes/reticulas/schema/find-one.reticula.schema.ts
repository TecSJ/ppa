import { FastifySchema } from "fastify";
import { reticula } from "./properties/reticula"
import { asignatura } from "./properties/asignatura"

export const findOneReticulaSchema: FastifySchema = {
    tags: ['Reticulas'],
    summary: 'Buscar una retícula',
    description: 'Endpoint para buscar una Retícula',
    params: {
        required: ['idReticula'],
        type: 'object',
        properties: {
            idReticula: { type: 'number' },
        },
    },
    response: {
        200: {
            description: 'Retícula encontrada',
            type: 'object',
            properties: {
                idReticula: { type: 'number' },
                ...reticula,
                asignatura: {
                    type: 'object',
                    properties: {
                        ...asignatura,
                    },
                }
            },
        },
        404: {
            description: 'Retícula no encontrada',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}
