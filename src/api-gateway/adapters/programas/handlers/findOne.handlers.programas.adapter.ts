import { findOnePrograma } from 'api-gateway/use-cases/programa/findOne.programa.use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { findOneProgramaSchema } from 'validators/programa';
import { handleError } from '../../../utils/error.handler';

export const findOneProgramaHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    try{
        const { idPrograma } = findOneProgramaSchema.parse(request.params)

        const programa = await findOnePrograma({idPrograma});

        if(!programa){
            reply.code(404).send({ error: 'Plan de Estudio no encontrado' });
            return;
        }
    
        return reply.code(200).send(programa);
    }catch(err: unknown){
        const error = err instanceof Error ? err : new Error('Unknown error');
        handleError({ reply, error });
    }
}