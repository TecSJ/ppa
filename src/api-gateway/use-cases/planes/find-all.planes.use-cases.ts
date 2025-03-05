import { findAllQuery } from 'models/queries';
import { Planes } from 'models/types/Planes';

type FindAllPlanesData = Partial<Planes>;

const findAllPlanes = async (where?: FindAllPlanesData) => {
  return await findAllQuery(Planes)({
    ...where,
  });
};

export { findAllPlanes };