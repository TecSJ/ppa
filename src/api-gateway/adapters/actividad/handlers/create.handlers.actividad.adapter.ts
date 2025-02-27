import { FastifyReply, FastifyRequest } from 'fastify';
import { createActividad } from '../../../use-cases/actividad';
import { CreateActividadSchema } from 'validators/actividad';
import { handleError } from '../../../utils/error.handler';

export const createActividadHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateActividadSchema.parse(request.body);
    const newControl = await createActividad(data);
    reply.code(201).send(newControl);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};