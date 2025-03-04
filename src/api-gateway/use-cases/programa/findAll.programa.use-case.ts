import { findAllQuery } from 'models/queries';
import { Programa } from 'models/types/Programas';

type FindAllProgramasData = Partial<Programa>

const findAllProgramas = async(where?: FindAllProgramasData) => {
    return await findAllQuery(Programa)({
        ...where,
    });
}

export {findAllProgramas}