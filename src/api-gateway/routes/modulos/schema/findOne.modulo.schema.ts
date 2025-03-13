import { FastifySchema } from "fastify";

export const findOneModuloSchema: FastifySchema = {
    tags: ['Modulos'],
    summary: 'Buscar una Modulo',
    description: 'Endpoint para buscar una Modulo',
    params: {
        required: ['idModulo'],
        type: 'object',
        properties: {
            idModulo: { type: 'number' },
        },
    },
    response: {
        200: {
            description: 'Modulo encontrada',
            type: 'object',
            properties: {
                idModulo: { type: 'integer' },
                clave: { type: 'string' },
                abreviatura: { type: 'string' },
                nombre: { type: 'string' },
                creditos: { type: 'integer' },
                asignaturas: { type: 'integer' },
                tipo: { type: 'string' },
                estado: { type: 'string' },
                planDeEstudio: { type: 'string' },
                carrera: { type: 'string' },
                unidadAcademica: { type: 'string' },
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
