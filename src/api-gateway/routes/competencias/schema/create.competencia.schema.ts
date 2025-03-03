import { FastifySchema } from 'fastify';
import { competencia } from './propeties/competencia'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { estado, ...Competencia } = competencia;

export const createCompetenciaSchema:FastifySchema ={
    tags:  ['Competencias'],
    summary: 'Crear una competencia',
    description: 'Endpoint para la creacion de una Competencia',   
    body: {
        type: 'object',
        properties: Competencia,
    },
    response: {
            200: {
                description: 'Competencia creada',
                type: 'object',
                properties: competencia
            },
            400: {
                description: 'Solicitud Invalida',
                type: 'object',
                properties: {
                    error: { type: 'string' },
                    message: { type: 'string' },
                },
            },
        },  
}
