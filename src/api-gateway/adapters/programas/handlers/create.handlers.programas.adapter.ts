import { FastifyReply, FastifyRequest } from 'fastify';
import { handleError } from '../../../utils/error.handler';
import { CreateProgramaSchema } from '@validators/programa';
import { createPrograma } from '@api-gateway/use-cases/programa/create.programa.use-case';

export const createProgramaHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    try{
        const data = CreateProgramaSchema.parse(request.body);
        console.log(data);
        const newPrograma = await createPrograma(data);
        reply.code(201).send(newPrograma);
    }catch(err: unknown){
        const error = err instanceof Error ? err : new Error('Unknown error');
        handleError({ reply, error });
    }
}