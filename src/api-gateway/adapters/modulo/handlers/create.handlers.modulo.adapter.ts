import { FastifyReply, FastifyRequest } from 'fastify';
import { createModulo } from '../../../use-cases/modulo';
import { CreateModuloSchema } from 'validators/modulo';
import { handleError } from '../../../utils/error.handler';

export const createModuloHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const param = request.params as Record<string, unknown>;
    const bod = request.body as Record<string, unknown>;
    const dat = { ...param, ...bod };

    const data = CreateModuloSchema.parse(dat);
    const newControl = await createModulo(data);
    reply.code(201).send(newControl);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};