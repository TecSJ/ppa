import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneAsignaturaSchema } from 'validators/asignatura'; 
import { findOneAsignatura } from '../../../use-cases/asignatura';
import { handleError } from '../../../utils/error.handler';

export const findOneAsignaturaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idAsignatura } = FindOneAsignaturaSchema.parse(request.params);

    const asignatura = await findOneAsignatura({ idAsignatura });

    if (!asignatura) {
      reply.code(404).send({ error: 'Asignatura no encontrada' });
      return;
    }

    reply.code(200).send(asignatura);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
