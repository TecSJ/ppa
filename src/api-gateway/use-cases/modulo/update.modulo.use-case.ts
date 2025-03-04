import { updateQuery} from 'models/queries';
import { Modulo } from 'models/types/Modulos';
import { Optional } from 'sequelize';

interface ModuloAttributes {
    idModulo: number;
    idPlan?: number;
    clave?: string;
    abreviatura?: string;
    nombre?: string;
    creditos?: number;
    asignatuas?: number;
    tipo?: string;
    estado?: string;
}

type UpdateModuloData = Optional<ModuloAttributes, 'idModulo'>;

const updateModulo = async (idModulo: number, data: UpdateModuloData) => {
  try {

    const [affectedRows] = await updateQuery(Modulo)(data, { idModulo });

    if (affectedRows === 0) {
      return null;
    }

    return await Modulo.findOne({ where: { idModulo } });
  } catch (error) {
    console.error('Error en updateModulo:', error);
    throw new Error('Error al actualizar la Modulo');
  }
};


export { updateModulo };


