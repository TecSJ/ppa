import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteModuloSchema } from 'validators/modulo';
import { deleteModulo } from '../../../use-cases/modulo';
import { handleError } from '../../../utils/error.handler';

export const deleteModuloHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idModulo } = DeleteModuloSchema.parse(request.params);

    const isDeleted = await deleteModulo({ idModulo });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Modulo no encontrada' });
      return;
    }

    reply.code(200).send({ message: 'Modulo eliminada con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
