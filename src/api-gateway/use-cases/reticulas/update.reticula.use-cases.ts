import { updateQuery} from '@models/queries';
import { Reticulas } from '@models/types/Reticulas';
import { Optional } from 'sequelize';

type ReticulaAttributes = {
    idReticula?: number;
    idPlan?: number;
    idAsignatura?: number;
    clave?: string;
    esRequerida?: "S" | "N";
    esEvaluada?: "S" | "N";
    esPromediada?: "S" | "N";
    fila?: number;
    columna?: number;
    documento?: string;
    estado?: "Elaborado" | "Validado" | "Autorizado" | "Publicado" | "Cancelado";
};
 
type UpdateReticulaData = Optional<ReticulaAttributes, 'idReticula'>;

const updateReticula = async (idReticula: number, data: UpdateReticulaData) => {
  try {
    const reticulaActual = await Reticulas.findOne({ where: { idReticula } });

    if (!reticulaActual) {
      throw new Error(`No se encontró la retícula con id ${idReticula}`);
    }

    if ((reticulaActual as ReticulaAttributes).estado === 'Publicado') {
      throw new Error('No se puede modificar una retícula en estado Publicado');
    }    

    const [affectedRows] = await updateQuery(Reticulas)(data, { idReticula });

    if (affectedRows === 0) {
      return null;
    }

    return await Reticulas.findOne({ where: { idReticula } });
  } catch (error) {
    throw new Error(`Error al actualizar la Retícula: ${error instanceof Error ? error.message : String(error)}`);
  }
};


export { updateReticula };


