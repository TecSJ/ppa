import { FastifyReply, FastifyRequest } from 'fastify';
import { FindOneModuloSchema } from 'validators/modulo'; 
import { findOneModulo } from '../../../use-cases/modulo';
import { handleError } from '../../../utils/error.handler';

export const findOneModuloHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idModulo } = FindOneModuloSchema.parse(request.params);

    const modulo = await findOneModulo({ idModulo });

    if (!modulo) {
      reply.code(404).send({ error: 'Modulo no encontrado' });
      return;
    }

    reply.code(200).send(modulo);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
