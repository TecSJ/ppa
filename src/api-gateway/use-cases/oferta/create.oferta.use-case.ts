import { findOneQuery, createQuery } from '@models/queries';
import { Oferta } from '@models/types/Ofertas';
import { CreationAttributes } from 'sequelize';

type CreateOfertaData = CreationAttributes<Oferta>;

const createOferta = async (data: CreateOfertaData) => {
  const existingOferta = await findOneQuery(Oferta)({
    idPrograma: data.idPrograma,
    idPeriodo: data.idPeriodo,
    turno: data.turno
  });

  if (existingOferta) {
    throw new Error('Ya existe una oferta académica con estos valores');
  }

  return await createQuery(Oferta)(data);
};

export { createOferta };
