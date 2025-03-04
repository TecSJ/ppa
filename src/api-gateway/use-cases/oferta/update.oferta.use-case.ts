import { updateQuery} from 'models/queries';
import { Oferta } from 'models/types/Ofertas';
import { Optional } from 'sequelize';

interface OfertaAttributes {
  idOferta: number;
  idPrograma?: number;
  idPeriodo?: string;
  turno?: string;
  espacios?: number;
  estado?: string;
}

type UpdateOfertaData = Optional<OfertaAttributes, 'idOferta'>;
const updateOferta = async (idOferta: number, data: UpdateOfertaData) => {
  try {

    const [affectedRows] = await updateQuery(Oferta)(data, { idOferta });

    if (affectedRows === 0) {
      return null;
    }

    return await Oferta.findOne({ where: { idOferta } });
  } catch (error) {
    console.error('Error en updateOferta:', error);
    throw new Error('Error al actualizar la Oferta');
  }
};


export { updateOferta };


