import { findOneQuery } from 'models/queries';
import { Oferta } from 'models/types/Ofertas';

type OfertaAttributes = {
  idOferta: number;
};
  
type FindOneOfertaData = Partial<OfertaAttributes>;
  
const findOneOferta = async (where: FindOneOfertaData) => {
  return await findOneQuery(Oferta)(where);
};
  
export { findOneOferta };
  