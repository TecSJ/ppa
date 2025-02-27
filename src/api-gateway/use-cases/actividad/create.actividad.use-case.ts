import { findOneQuery, createQuery } from 'models/queries';
import { Actividad } from 'models/types/Actividades';
import { CreationAttributes } from 'sequelize';

type CreateActividadData = CreationAttributes<Actividad>;

const createActividad = async (data: CreateActividadData) => {
  const existingActividad = await findOneQuery(Actividad)({
    nombre: data.nombre,
  });

  if (existingActividad) {
    throw new Error('Ya existe un registro con este nombre');
  }

  return await createQuery(Actividad)(data);
};

export { createActividad };
