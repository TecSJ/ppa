import { findAllQuery } from 'models/queries';
import { Asignatura } from 'models/types/Asignaturas';

type FindAllAsignaturasData = Partial<Asignatura>;

const findAllAsignaturas = async (where?: FindAllAsignaturasData) => {
  return await findAllQuery(Asignatura)(where);
};

export { findAllAsignaturas };