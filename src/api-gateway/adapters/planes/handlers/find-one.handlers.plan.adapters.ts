import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOnePlanSchema } from 'validators/planes'; 
import { findOnePlan } from '../../../use-cases/planes';
import { handleError } from '../../../utils/error.handler';

export const findOnePlanHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idPlan } = FindOnePlanSchema.parse(request.params);

    const plan = await findOnePlan({ idPlan });

    if (!plan) {
      reply.code(404).send({ error: 'Plan de Estudio no encontrado' });
      return;
    }

    reply.code(200).send(plan);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
