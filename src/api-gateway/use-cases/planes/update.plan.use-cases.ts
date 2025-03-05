import { updateQuery} from 'models/queries';
import { Planes } from 'models/types/Planes';
import { Optional } from 'sequelize';

interface PlanesAttributes {
    idPlan: number;
    clave?: string;
    fechaInicio?: string;
    fechaTermino?: string;
    creditos?: number;
    credMin?: number;
    credMax?: number;
    documento?: string;
    estado?: "Elaborado" | "Validado" | "Autorizado" | "Publicado" | "Cancelado";
}

type UpdatePlanData = Optional<PlanesAttributes, 'idPlan'>;

const updatePlan= async (idPlan: number, data: UpdatePlanData) => {
  try {

    const [affectedRows] = await updateQuery(Planes)(data, { idPlan });

    if (affectedRows === 0) {
      return null;
    }

    return await Planes.findOne({ where: { idPlan } });
  } catch (error) {
    console.error('Error en updatePlan:', error);
    throw new Error('Error al actualizar el Plan de estudio');
  }
};


export { updatePlan };


