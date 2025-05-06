import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdatePlanSchema, UpdatePlanBodySchema } from '@validators/planes'; 
import { updatePlan } from '../../../use-cases/planes';
import { handleError } from '../../../utils/error.handler';

export const updatePlanHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idPlan } = UpdatePlanSchema.parse(request.params); 
    const body = UpdatePlanBodySchema.parse(request.body); 

    const planActualizado = await updatePlan(idPlan, body);

    reply.code(200).send(planActualizado);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
