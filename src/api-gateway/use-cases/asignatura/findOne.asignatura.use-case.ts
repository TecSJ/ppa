type AsignaturaAttributes = {
  idAsignatura: number;
  idModulo: number;
  clave: string;
  nombre: string;
  creditos: number;
  uniudades: number;
  horasPracticas: number;
  horasTeoricas: number;
  horasNomina: number;
  resumen: string;
  intencion: string;
  competencia: string;
  documento: string;
  estado: string;
};
  
  type FindOneAsignaturaData = Partial<AsignaturaAttributes>;
  
  import { findOneQuery } from 'models/queries';
  import { Asignatura } from 'models/types/Asignaturas';
  
  const findOneAsignatura = async (where: FindOneAsignaturaData) => {
    return await findOneQuery(Asignatura)(where);
  };
  
  export { findOneAsignatura };
  