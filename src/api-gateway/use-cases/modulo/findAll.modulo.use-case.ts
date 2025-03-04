import { Op } from 'sequelize';
import { findAllQuery } from 'models/queries';
import { Actividad } from 'models/types/Actividades';

type FindAllActividadsData = Partial<Actividad>;

const findAllActividades = async (where?: FindAllActividadsData) => {
  return await findAllQuery(Actividad)({
    estado: { [Op.ne]: 'Cancelado' }, // Estado no sea "Cancelado"
    ...where,
  });
};

export { findAllActividades };