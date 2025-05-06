import { findOneQuery, createQuery } from '@models/queries';
import { Modulo } from '@models/types/Modulos';
import { CreationAttributes, Op } from 'sequelize';

type CreateModuloData = CreationAttributes<Modulo>;

const createModulo = async (data: CreateModuloData) => {
  const existingModulo = await findOneQuery(Modulo)({
    idPlan: data.idPlan,
    clave: data.clave,
    estado: { [Op.ne]: 'Cancelado' },
  });

  if (existingModulo) {
    throw new Error('Ya existe un registro con este nombre');
  }

  return await createQuery(Modulo)(data);
};

export { createModulo };
