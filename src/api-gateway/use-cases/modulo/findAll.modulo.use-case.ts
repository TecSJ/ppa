import { findAllQuery } from 'models/queries';
import { Modulo } from 'models/types/Modulos';
import { Planes } from 'models/types/Planes';
import { Programa } from 'models/types/Programas';

type FindAllModulosData = Partial<Modulo>;

const findAllModulos = async (where?: FindAllModulosData) => {
  return await findAllQuery(Modulo)(
    where,
    [
      {
        model: Planes,
        as: "plan",
        attributes: [["clave","planDeEstudio"], "idPrograma"],
        include: [
          {
            model: Programa,
            as: "programa",
            attributes: [["abreviatura", "carrera"], ["idPlantel", "unidadAcademica"]],
          },
        ],
      },
    ]
  );
};

export { findAllModulos };