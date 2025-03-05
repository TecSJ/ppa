import { FastifyReply, FastifyRequest } from 'fastify';
import { FindAllModuloSchema } from 'validators/modulo';
import { findAllModulos } from '../../../use-cases/modulo';
import { handleError } from '../../../utils/error.handler';

export const findAllModuloHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    FindAllModuloSchema.parse(request.query);

    const modulos = await findAllModulos();

    if (!modulos || modulos.length === 0) {
      reply.code(404).send({ error: 'No se encontraron Modulos' });
      return;
    }

    reply.code(200).send(modulos);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
