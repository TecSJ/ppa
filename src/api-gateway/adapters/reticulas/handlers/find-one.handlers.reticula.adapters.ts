import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneReticulaSchema } from '@validators/reticulas'; 
import { findOneReticula } from '../../../use-cases/reticulas';
import { handleError } from '../../../utils/error.handler';

export const findOneReticulaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idReticula } = FindOneReticulaSchema.parse(request.params);

    const reticula = await findOneReticula({ idReticula });

    if (!reticula) {
      reply.code(404).send({ error: 'Reticula no encontrado' });
      return;
    }

    reply.code(200).send(reticula);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
