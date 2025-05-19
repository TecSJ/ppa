import { findOneQuery } from '@models/queries';
import { Asignatura } from '@models/types/Asignaturas';
import { Planes } from '@models/types/Planes';
import { Reticulas } from '@models/types/Reticulas';
  
type ReticulaAttributes = {
    idReticula: number;
    idPlan: number;
    idAsignatura: number;
    clave: string;
    esRequerida: string;
    esEvaluada: string;
    esPromediada: string;
    fila: number;
    columna: number;
    documento: string;
    estado: "Elaborado" | "Validado" | "Autorizado" | "Publicado" | "Cancelado";
};
  
type FindOneReticulaData = Partial<ReticulaAttributes>;

const findOneReticula = async (where: FindOneReticulaData) => {
  return await findOneQuery(Reticulas)(
    where,
    [
      {
        model: Asignatura,
        as: "asignatura",
      },
      {
        model: Planes,
        as: "planes",
      },    
    ]
  );
};

export { findOneReticula };
  