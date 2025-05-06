import { updateQuery} from '@models/queries';
import { Asignatura } from '@models/types/Asignaturas';
import { Optional } from 'sequelize';

interface AsignaturaAttributes {
  idAsignatura: number;
  idModulo?: number;
  clave?: string;
  nombre?: string;
  creditos?: number;
  unidades?: number;
  horasPracticas?: number;
  horasTeoricas?: number;
  horasNomina?: number;
  resumen?: string;
  intencion?: string;
  competencia?: string;
  documento?: string;
  estado?: string;
}

type UpdateAsignaturaData = Optional<AsignaturaAttributes, 'idAsignatura'>;

const updateAsignatura = async (idAsignatura: number, data: UpdateAsignaturaData) => {
  try {

    const [affectedRows] = await updateQuery(Asignatura)(data, { idAsignatura });

    if (affectedRows === 0) {
      return null;
    }

    return await Asignatura.findOne({ where: { idAsignatura } });
  } catch (error) {
    console.error('Error en updateAsignatura:', error);
    throw new Error('Error al actualizar la Asignatura');
  }
};


export { updateAsignatura };


