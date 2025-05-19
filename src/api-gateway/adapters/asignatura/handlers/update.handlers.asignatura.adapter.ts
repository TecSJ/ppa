import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateAsignaturaSchema, UpdateAsignaturaBodySchema } from '@validators/asignatura'; 
import { updateAsignatura } from '../../../use-cases/asignatura';
import { handleError } from '../../../utils/error.handler';

export const updateAsignaturaHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { idAsignatura } = UpdateAsignaturaSchema.parse(request.params); 
    const { idModulo, clave, nombre, creditos, unidades, horasTeoricas, horasPracticas,
      horasNomina, resumen, competencia, documento, estado } = UpdateAsignaturaBodySchema.parse(request.body); 

    const asignaturaActualizada = await updateAsignatura(idAsignatura, { idModulo, clave, nombre, creditos, unidades, horasTeoricas, horasPracticas,
      horasNomina, resumen, competencia, documento, estado  });

    reply.code(200).send(asignaturaActualizada);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    handleError({ reply, error });
  }
};
