import { deleteQuery } from 'models/queries';
import { Oferta } from 'models/types/Ofertas';
  
type OfertaAttributes = {
  idOferta: number;
};
  
type DeleteOfertaData = Partial<OfertaAttributes>;
  
  
  const deleteOferta = async (where: DeleteOfertaData) => {
    return await deleteQuery(Oferta)(where);
  };
  
  export { deleteOferta };
