import { FastifyReply, FastifyRequest } from 'fastify';
import { handleError } from '../../../utils/error.handler';
import { findAllProgramas } from 'api-gateway/use-cases/programa/findAll.programa.use-case';

export const findAllProgramasHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    try{
        const programa = await findAllProgramas();
        
        if(!programa || programa.length === 0){
            reply.code(404).send({error: 'No se encontraron programas'});
            return;
        }

        reply.code(200).send(programa);
    }catch(err: unknown){
        const error = err instanceof Error ? err : new Error('Unknown error');
        handleError({ reply, error });
    }
}
