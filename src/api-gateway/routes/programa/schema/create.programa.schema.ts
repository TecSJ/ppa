import { FastifySchema } from "fastify";
import { programa } from "./properties/programa";

export const createProgramaSchema: FastifySchema = {
    tags: ['Programas'],
    summary: 'Crear programa',
    description: 'Endpoint para crear un Programa',
    body: {
        type: 'object',
        required: ['clave'],
        properties: programa,
    },
    response: {
        201: {
            description: 'programa creado',
            type: 'object',
            properties: programa
        },
        500: {
            description: 'solicitud invalida',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
            },
        },
    }
}