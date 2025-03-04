import { FastifyReply, FastifyRequest } from 'fastify';
import { createPlan } from '../../../use-cases/planes';
import { CreatePlanSchema } from 'validators/planes';
import { handleError } from '../../../utils/error.handler';

export const createPlanHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreatePlanSchema.parse(request.body);
    const newPlan = await createPlan(data);
    reply.code(201).send(newPlan);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};