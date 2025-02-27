import { findAllQuery } from 'models/queries';
import { Actividad } from 'models/types/Actividades';

type FindAllActividadsData = Partial<Actividad>;

const findAllActividades = async (where?: FindAllActividadsData) => {
  return await findAllQuery(Actividad)(where);
};

export { findAllActividades };