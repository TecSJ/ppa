import { findOneQuery, createQuery } from 'models/queries';
import { Planes } from 'models/types/Planes';
import { CreationAttributes } from 'sequelize';

type CreatePlanData = CreationAttributes<Planes>;

const createPlan = async (data: CreatePlanData) => {
  const existingPlan = await findOneQuery(Planes)({
    clave: data.clave,
  });

  if (existingPlan) {
    throw new Error('Ya existe un registro con esta clave');
  }

  return await createQuery(Planes)(data);
};

export { createPlan };
