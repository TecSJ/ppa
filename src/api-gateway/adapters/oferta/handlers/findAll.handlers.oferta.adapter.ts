import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllOfertaSchema } from 'validators/oferta';
import { findAllOfertas } from '../../../use-cases/oferta';
import { handleError } from '../../../utils/error.handler';

export const findAllOfertasHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllOfertaSchema.parse(request.query);

    const ofertas = await findAllOfertas();

    if (!ofertas || ofertas.length === 0) {
      reply.code(404).send({ error: 'No se encontraron ofertas' });
      return;
    }

    reply.code(200).send(ofertas);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
