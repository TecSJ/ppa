import { findOneQuery, createQuery } from 'models/queries';
import { Reticulas } from 'models/types/Reticulas';
import { CreationAttributes } from 'sequelize';

type CreateReticulaData = CreationAttributes<Reticulas>;

const createReticula = async (data: CreateReticulaData) => {
  const existingReticula = await findOneQuery(Reticulas)({
    clave: data.clave,
  });

  if (existingReticula) {
    throw new Error('Ya existe un registro con esta clave');
  }

  return await createQuery(Reticulas)(data);
};

export { createReticula };
