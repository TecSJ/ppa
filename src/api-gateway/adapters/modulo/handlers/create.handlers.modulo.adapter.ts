import { FastifyReply, FastifyRequest } from 'fastify';
import { createModulo } from '../../../use-cases/modulo';
import { CreateModuloSchema } from 'validators/modulo';
import { handleError } from '../../../utils/error.handler';

export const createModuloHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateModuloSchema.parse(request.body);
    const newControl = await createModulo(data);
    reply.code(201).send(newControl);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};