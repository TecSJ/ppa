type ProgramaAttributes = {
    idPrograma: number,
    clave: string,
    codigo: string,
    abreviatura: string,
    nombre: string,
    certificacion: string,
    modalidad: string,
    nivel: string
    documento: string,
    idPlantel: string,
    estado: string,
}

type findOneProgramaData = Partial<ProgramaAttributes>;

import { findOneQuery } from "@models/queries";
import { Programa } from "@models/types/Programas";

const findOnePrograma = async  (where: findOneProgramaData) => {
    return await findOneQuery(Programa)(where);
}

export { findOnePrograma };