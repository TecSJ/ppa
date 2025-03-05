import { FastifyReply, FastifyRequest } from 'fastify';
import { createOferta } from '../../../use-cases/oferta';
import { CreateOfertaSchema } from 'validators/oferta';
import { handleError } from '../../../utils/error.handler';

export const createOfertaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateOfertaSchema.parse(request.body);
    const newControl = await createOferta(data);
    reply.code(201).send(newControl);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};