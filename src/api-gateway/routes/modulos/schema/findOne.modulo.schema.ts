import { FastifySchema } from "fastify";
import { modulo } from "./propeties/modulo";

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
                                idModulo: {
                                    type: 'integer'
                                },
                                ...modulo,
                                plan: {
                                    type: 'object',
                                    properties: {
                                        planDeEstudio: {
                                            type: 'string',
                                        },
                                        idPrograma: {
                                            type: 'string',
                                        },
                                        programa: {
                                            type: 'object',
                                            properties: {
                                                abreviatura: {
                                                    type: 'string',
                                                },
                                                idPlantel: {
                                                    type: 'string',
                                                }
                                            },
                                        }
                                    },
                                }
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
