import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateReticulaSchema, UpdateReticulaBodySchema } from '@validators/reticulas'; 
import { updateReticula } from '../../../use-cases/reticulas';
import { handleError } from '../../../utils/error.handler';

export const updateReticulaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idReticula } = UpdateReticulaSchema.parse(request.params); 
    const body = UpdateReticulaBodySchema.parse(request.body); 

    const reticula = await updateReticula(idReticula, body);

    reply.code(200).send(reticula);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
