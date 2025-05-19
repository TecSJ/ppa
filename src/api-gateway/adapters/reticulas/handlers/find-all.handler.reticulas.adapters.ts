import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllReticulasSchema } from '@validators/reticulas';
import { findAllReticulas } from '../../../use-cases/reticulas';
import { handleError } from '../../../utils/error.handler';

export const findAllReticulasHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllReticulasSchema.parse(request.query);

    const reticulas = await findAllReticulas();

    if (!reticulas || reticulas.length === 0) {
      reply.code(404).send({ error: 'No se encontraron reticulas' });
      return;
    }

    reply.code(200).send(reticulas);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
