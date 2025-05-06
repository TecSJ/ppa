import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneActividadSchema } from '@validators/actividad'; 
import { findOneActividad } from '../../../use-cases/actividad';
import { handleError } from '../../../utils/error.handler';

export const findOneActividadHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idActividad } = FindOneActividadSchema.parse(request.params);

    const actividad = await findOneActividad({ idActividad });

    if (!actividad) {
      reply.code(404).send({ error: 'Actividad no encontrado' });
      return;
    }

    reply.code(200).send(actividad);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
