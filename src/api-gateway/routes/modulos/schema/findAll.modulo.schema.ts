import { FastifySchema } from "fastify";

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