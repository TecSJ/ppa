import { FastifySchema } from "fastify";
import { actividad } from "./propeties/actividad";

export const updateActividadesSchema: FastifySchema = {
    tags: ['Actividades'],
    summary: 'Actualizar una actividad',
    description: 'Endpoint para actualizar una actividad',
    params: {
        required: ['idActividad'],
        type: 'object',
        properties: {
            idActividad: { type: 'number' },
        },
    },
    body: {
        type: 'object',
        properties: actividad
    },
    response: {
        200: {
            description: 'Actividad actualizada',
            type: 'object',
            properties: {
                idActividad: { type: 'number' },
                nombre: { type: 'string' },
            },
        },
        404: {
            description: 'Actividad no encontrada',
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string'},
            },
        },
    },
}
