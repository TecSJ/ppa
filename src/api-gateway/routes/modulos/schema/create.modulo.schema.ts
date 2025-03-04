import { FastifySchema } from 'fastify';
import { modulo } from './propeties/modulo';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { estado, idPlan, ...Modulo } = modulo;

export const createModuloSchema: FastifySchema = {
  tags: ['Modulos'],
  summary: 'Crear una Modulos',
  description: 'Endpoint para la creación de una Modulos',
  params: {
    type: 'object',
    required: ['idPlan'],
    properties: {
      idPlan: { type: 'integer' },
    },
  },
  body: {
    type: 'object',
    properties: Modulo,
  },
  response: {
    200: {
      description: 'Módulo creado',
      type: 'object',
      properties: modulo,
    },
    400: {
      description: 'Solicitud inválida',
      type: 'object',
      properties: {
        error: { type: 'string' },
        message: { type: 'string' },
      },
    },
  },
};
