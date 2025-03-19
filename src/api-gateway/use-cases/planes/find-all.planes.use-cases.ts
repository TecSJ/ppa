import { findAllQuery } from 'models/queries';
import { Planes } from 'models/types/Planes';
import { Programa } from 'models/types/Programas';

type FindAllPlanesData = Partial<Planes>;

const findAllPlanes = async (where?: FindAllPlanesData) => {
  return await findAllQuery(Planes)(
    where,
    [
      {
        model: Programa,
        as: "programa",
      },    
    ]
  );
};

export { findAllPlanes };