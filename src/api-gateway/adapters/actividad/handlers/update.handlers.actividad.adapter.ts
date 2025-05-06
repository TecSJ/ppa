import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateActividadSchema, UpdateActividadBodySchema } from '@validators/actividad'; 
import { updateActividad } from '../../../use-cases/actividad';
import { handleError } from '../../../utils/error.handler';

export const updateActividadHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idActividad } = UpdateActividadSchema.parse(request.params); 
    const { nombre } = UpdateActividadBodySchema.parse(request.body); 

    const actividadActualizada = await updateActividad(idActividad, { nombre });

    reply.code(200).send(actividadActualizada);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
