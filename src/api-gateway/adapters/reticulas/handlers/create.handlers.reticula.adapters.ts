import { FastifyReply, FastifyRequest } from 'fastify';
import { createReticula } from '../../../use-cases/reticulas';
import { CreateReticulaSchema } from 'validators/reticulas';
import { handleError } from '../../../utils/error.handler';

export const createReticulaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateReticulaSchema.parse(request.body);
    const newReticula = await createReticula(data);
    reply.code(201).send(newReticula);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};