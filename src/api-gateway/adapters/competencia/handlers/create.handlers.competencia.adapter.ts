import { FastifyReply, FastifyRequest } from 'fastify';
import { createCompetencia } from '../../../use-cases/competencia';
import { CreateCompetenciaSchema } from 'validators/competencia';
import { handleError } from '../../../utils/error.handler';

export const createCompetenciaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateCompetenciaSchema.parse(request.body);
    const newControl = await createCompetencia(data);
    reply.code(201).send(newControl);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};