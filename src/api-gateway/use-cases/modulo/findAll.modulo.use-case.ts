import { findAllQuery } from 'models/queries';
import { Modulo } from 'models/types/Modulos';

type FindAllModulosData = Partial<Modulo>;

const findAllModulos = async (where?: FindAllModulosData) => {
  return await findAllQuery(Modulo)({
    ...where,
  });
};

export { findAllModulos };