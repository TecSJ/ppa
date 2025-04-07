import { findAllQuery } from 'models/queries';
import { Reticulas } from 'models/types/Reticulas';
import { Asignatura } from 'models/types/Asignaturas';
import { Planes } from 'models/types/Planes';

type FindAllReticulasData = Partial<Reticulas>;

const findAllReticulas = async (where?: FindAllReticulasData) => {
  return await findAllQuery(Reticulas)(
    where,
    [
      {
        model: Asignatura,
        as: "asignatura",
      },
      {
        model: Planes,
        as: "planes",
      },    
    ]
  );
};

export { findAllReticulas };