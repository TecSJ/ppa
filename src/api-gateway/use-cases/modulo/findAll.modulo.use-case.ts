import { Op } from 'sequelize';
import { findAllQuery } from 'models/queries';
import { Modulo } from 'models/types/Modulos';

type FindAllModulosData = Partial<Modulo>;

const findAllModulos = async (where?: FindAllModulosData) => {
  return await findAllQuery(Modulo)({
    estado: { [Op.ne]: 'Cancelado' }, // Estado no sea "Cancelado"
    ...where,
  });
};

export { findAllModulos };