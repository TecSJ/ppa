import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteOfertaSchema } from 'validators/oferta';
import { deleteOferta } from '../../../use-cases/oferta';
import { handleError } from '../../../utils/error.handler';

export const deleteOferttaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idOferta } = DeleteOfertaSchema.parse(request.params);

    const isDeleted = await deleteOferta({ idOferta });

    if (!isDeleted) {
      reply.code(404).send({ error: 'Oferta no encontrada' });
      return;
    }

    reply.code(200).send({ message: 'Oferta eliminada con éxito' });
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
