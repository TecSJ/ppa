import { findAllQuery } from '@models/queries';
import { Programa } from '@models/types/Programas';
import { Op } from 'sequelize';

type FindAllProgramasData = Partial<Programa>

const findAllProgramas = async(where?: FindAllProgramasData) => {
    return await findAllQuery(Programa)({
        ...where,
        estado: {
            [Op.ne]: 'Cancelado'
        },
    });
}

export {findAllProgramas}