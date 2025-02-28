import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteAsignaturaSchema } from 'validators/asignatura';
import { deleteAsignatura } from '../../../use-cases/asignatura';
import { handleError } from '../../../utils/error.handler';

export const deleteAsignaturaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idAsignatura } = DeleteAsignaturaSchema.parse(request.params);

    const isDeleted = await deleteAsignatura({ idAsignatura });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Asignatura no encontrada' });
      return;
    }

    reply.code(200).send({ message: 'Asignatura eliminada con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
