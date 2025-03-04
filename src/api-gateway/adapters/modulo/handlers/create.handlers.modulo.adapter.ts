import { FastifyReply, FastifyRequest } from 'fastify';
import { createModulo } from '../../../use-cases/modulo';
import { CreateModuloSchema } from 'validators/modulo';
import { handleError } from '../../../utils/error.handler';

export const createModuloHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {

    const parm = typeof request.params === 'object' ? request.params : {};
    const bod = typeof request.body === 'object' ? request.body : {};
    const inf = { ...parm, ...bod };
    const data = CreateModuloSchema.parse(inf);
    const newControl = await createModulo(data);
    reply.code(201).send(newControl);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};