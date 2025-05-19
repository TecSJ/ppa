import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllPlanSchema } from '@validators/planes';
import { findAllPlanes } from '../../../use-cases/planes';
import { handleError } from '../../../utils/error.handler';

export const findAllPlanesHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllPlanSchema.parse(request.query);

    const planes = await findAllPlanes();

    if (!planes || planes.length === 0) {
      reply.code(404).send({ error: 'No se encontraron planes de estudio' });
      return;
    }

    reply.code(200).send(planes);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
