type ActividadAttributes = {
    idActividad: number;
  };
  
  type DeleteActividadData = Partial<ActividadAttributes>;
  
  import { deleteQuery } from '@models/queries';
  import { Actividad } from '@models/types/Actividades';
  
  const deleteActividad = async (where: DeleteActividadData) => {
    return await deleteQuery(Actividad)(where);
  };
  
  export { deleteActividad };
