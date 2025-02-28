import { findOneQuery, createQuery } from 'models/queries';
import { Asignatura } from 'models/types/Asignaturas';
import { CreationAttributes } from 'sequelize';

type CreateAsignaturaData = CreationAttributes<Asignatura>;

const createAsignatura = async (data: CreateAsignaturaData) => {
  const existingAsignatura = await findOneQuery(Asignatura)({
    clave: data.clave,
  });

  if (existingAsignatura) {
    throw new Error('Ya existe un registro con esta clave');
  }

  return await createQuery(Asignatura)(data);
};

export { createAsignatura };
