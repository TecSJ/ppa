import { findOneQuery, createQuery } from 'models/queries';
import { Competencia } from 'models/types/Competencias';
import { CreationAttributes } from 'sequelize';


type CreateCompetenciaData = CreationAttributes<Competencia>;

const createCompetencia = async (data: CreateCompetenciaData) => {
    const existingCompetencia = await findOneQuery(Competencia)({
      clave: data.clave,
    });
  
    if (existingCompetencia) {
      throw new Error('Ya existe un registro con esta clave');
    }
  
    return await createQuery(Competencia)(data);
  };
  
  export { createCompetencia };
  