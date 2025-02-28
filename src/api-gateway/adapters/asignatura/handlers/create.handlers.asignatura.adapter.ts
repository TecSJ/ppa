import { FastifyReply, FastifyRequest } from 'fastify';
import { createAsignatura } from '../../../use-cases/asignatura';
import { CreateAsignaturaSchema } from 'validators/asignatura';
import { handleError } from '../../../utils/error.handler';

export const createAsignaturaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = CreateAsignaturaSchema.parse(request.body);
    const newControl = await createAsignatura(data);
    reply.code(201).send(newControl);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};