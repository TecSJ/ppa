import { findOneQuery, createQuery } from "models/queries";
import { Programa } from "models/types/Programas";
import { CreationAttributes } from "sequelize";

type createProgramaData = CreationAttributes<Programa>

const createPrograma = async (data: createProgramaData) => {
    const existingPrograma = await findOneQuery(Programa)({
        clave: data.clave
    });

    if(existingPrograma){
        throw new Error('Ya existe un registro con esta clave');
    }

    return await createQuery(Programa)(data);
}

export {createPrograma}