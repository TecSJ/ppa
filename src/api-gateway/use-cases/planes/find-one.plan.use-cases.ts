type PlanAttributes = {
    idPlan: number;
    idPrograma: number;
    clave: string;
    fechaInicio: string;
    fechaTermino: string;
    creditos: number;
    credMin: number;
    credMax: number;
    documento: string;
    version: number;
    estado: "Elaborado" | "Validado" | "Autorizado" | "Publicado" | "Cancelado";
  };
  
  type FindOnePlanData = Partial<PlanAttributes>;
  
  import { findOneQuery } from '@models/queries';
  import { Planes } from '@models/types/Planes';
  
  const findOnePlan = async (where: FindOnePlanData) => {
    return await findOneQuery(Planes)(where);
  };
  
  export { findOnePlan };
  