import { findAllQuery } from '@models/queries';
import { Oferta } from '@models/types/Ofertas';
import { Programa } from '@models/types/Programas';

type FindAllOfertaData = Partial<Oferta>;

const findAllOfertas = async (where?: FindAllOfertaData) => {
  return await findAllQuery(Oferta)(
    where,
    [
      {
        model: Programa,
        as: "programa",
      },
    ]
  );
};

export { findAllOfertas };