import { updateQuery} from 'models/queries';
import { Actividad } from 'models/types/Actividades';
import { Optional } from 'sequelize';

interface ActividadAttributes {
  idActividad: number;
  nombre?: string;
}

type UpdateActividadData = Optional<ActividadAttributes, 'idActividad'>;

const updateActividad = async (idActividad: number, data: UpdateActividadData) => {
  try {

    const [affectedRows] = await updateQuery(Actividad)(data, { idActividad });

    if (affectedRows === 0) {
      return null;
    }

    return await Actividad.findOne({ where: { idActividad } });
  } catch (error) {
    console.error('Error en updateActividad:', error);
    throw new Error('Error al actualizar la Actividad');
  }
};


export { updateActividad };


