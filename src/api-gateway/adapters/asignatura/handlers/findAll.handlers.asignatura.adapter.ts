import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllAsignaturaSchema } from 'validators/asignatura';
import { findAllAsignaturas } from '../../../use-cases/asignatura';
import { handleError } from '../../../utils/error.handler';

export const findAllAsignaturaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllAsignaturaSchema.parse(request.query);

    const asignaturas = await findAllAsignaturas();

    if (!asignaturas || asignaturas.length === 0) {
      reply.code(404).send({ error: 'No se encontraron asignaturas' });
      return;
    }

    reply.code(200).send(asignaturas);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
