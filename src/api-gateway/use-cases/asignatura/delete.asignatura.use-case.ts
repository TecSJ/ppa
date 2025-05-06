type AsignaturaAttributes = {
    idAsignatura: number;
  };
  
  type DeleteAsignaturaData = Partial<AsignaturaAttributes>;
  
  import { deleteQuery } from '@models/queries';
  import { Asignatura } from '@models/types/Asignaturas';
  
  const deleteAsignatura = async (where: DeleteAsignaturaData) => {
    return await deleteQuery(Asignatura)(where);
  };
  
  export { deleteAsignatura };
