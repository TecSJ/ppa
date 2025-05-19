import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateOfertaSchema, UpdateOfertaBodySchema } from '@validators/oferta'; 
import { updateOferta } from '../../../use-cases/oferta';
import { handleError } from '../../../utils/error.handler';

export const updateOfertaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idOferta } = UpdateOfertaSchema.parse(request.params); 
    const { idPrograma, turno, espacios, idPeriodo, estado } = UpdateOfertaBodySchema.parse(request.body); 
    const ofertaActualizada = await updateOferta(idOferta, { idPrograma, turno, espacios, idPeriodo, estado });
    reply.code(200).send(ofertaActualizada);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};