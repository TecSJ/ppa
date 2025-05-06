import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateModuloSchema, UpdateModuloBodySchema } from '@validators/modulo'; 
import { updateModulo } from '../../../use-cases/modulo';
import { handleError } from '../../../utils/error.handler';

export const updateModuloHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idModulo } = UpdateModuloSchema.parse(request.params); 
    const { idPlan, clave, abreviatura, nombre, creditos, asignaturas, tipo, estado } = UpdateModuloBodySchema.parse(request.body); 

    const ModuloActualizada = await updateModulo(idModulo, { idPlan, clave, abreviatura, nombre, creditos, asignaturas, tipo, estado });

    reply.code(200).send(ModuloActualizada);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
