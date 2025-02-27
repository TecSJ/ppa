type ActividadAttributes = {
    idActividad: number;
    nombre: string;
  };
  
  type FindOneActividadData = Partial<ActividadAttributes>;
  
  import { findOneQuery } from 'models/queries';
  import { Actividad } from 'models/types/Actividades';
  
  const findOneActividad = async (where: FindOneActividadData) => {
    return await findOneQuery(Actividad)(where);
  };
  
  export { findOneActividad };
  