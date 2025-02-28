import { FastifySchema } from "fastify";
import { asignatura } from "./propeties/asignatura"

export const findAllAsignaturasSchema: FastifySchema = {
    tags: ['Asignaturas'],
    summary: 'Listar todas las Asignaturas',
    description: 'Endpoint para listar todas las Asignaturaes',
    response: {
        200: {
            description: 'Asignaturaes encontradas',
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    idAsignatura: {
                        type: 'integer'
                    },
                    ...asignatura
                }
            },
        },
        404: {
            description: 'No se encontraron Asignaturaes',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}