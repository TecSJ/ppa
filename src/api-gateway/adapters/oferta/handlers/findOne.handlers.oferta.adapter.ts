import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneOfertaSchema } from '@validators/oferta'; 
import { findOneOferta } from '../../../use-cases/oferta';
import { handleError } from '../../../utils/error.handler';

export const findOneOfertaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idOferta } = FindOneOfertaSchema.parse(request.params);

    const oferta = await findOneOferta({ idOferta });

    if (!oferta) {
      reply.code(404).send({ error: 'Oferta no encontrado' });
      return;
    }

    reply.code(200).send(oferta);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
