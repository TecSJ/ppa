import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteActividadSchema } from '@validators/actividad';
import { deleteActividad } from '../../../use-cases/actividad';
import { handleError } from '../../../utils/error.handler';

export const deleteActividadHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idActividad } = DeleteActividadSchema.parse(request.params);

    const isDeleted = await deleteActividad({ idActividad });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Actividad no encontrado' });
      return;
    }

    reply.code(200).send({ message: 'Actividad eliminado con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
