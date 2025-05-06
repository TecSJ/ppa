import { findAllQuery } from '@models/queries';
import { Oferta } from '@models/types/Ofertas';

type FindAllOfertaData = Partial<Oferta>;

const findAllOfertas = async (where?: FindAllOfertaData) => {
  return await findAllQuery(Oferta)({
    ...where,
  });
};

export { findAllOfertas };