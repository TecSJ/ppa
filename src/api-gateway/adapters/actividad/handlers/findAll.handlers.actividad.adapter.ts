import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllActividadSchema } from '@validators/actividad';
import { findAllActividades } from '../../../use-cases/actividad';
import { handleError } from '../../../utils/error.handler';

export const findAllActividadHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllActividadSchema.parse(request.query);

    const actividades = await findAllActividades();

    if (!actividades || actividades.length === 0) {
      reply.code(404).send({ error: 'No se encontraron actividades' });
      return;
    }

    reply.code(200).send(actividades);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
