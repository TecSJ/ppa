import { updateQuery } from 'models/queries';
import { Modulo } from 'models/types/Modulos';

type ModuloAttributes = {
  idModulo: number;
};

type DeleteModuloData = Partial<ModuloAttributes>;

const deleteModulo = async (where: DeleteModuloData) => {
  return await updateQuery(Modulo)({ estado: 'Cancelado' }, where);
};

export { deleteModulo };
