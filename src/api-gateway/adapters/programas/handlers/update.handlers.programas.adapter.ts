import { updatePrograma } from '@api-gateway/use-cases/programa/update.programa.use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { updateProgramaSchema, updateBodyProgramaSchema } from '@validators/programa';
import { handleError } from '../../../utils/error.handler';

export const updateProgramaHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    try{
        const { idPrograma } = updateProgramaSchema.parse(request.params);
        const body = updateBodyProgramaSchema.parse(request.body);

        const programaActualizado = await updatePrograma(idPrograma, body);

        reply.code(200).send(programaActualizado);
    } catch (err: unknown) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        handleError({ reply, error });
    }
}