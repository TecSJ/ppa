import { findOneQuery } from '@models/queries';
import { Modulo } from '@models/types/Modulos';
import { Planes } from '@models/types/Planes';
import { Programa } from '@models/types/Programas';

type FindOneModuloData = {
  idModulo: number;
};

const findOneModulo = async (where: FindOneModuloData) => {
  return await findOneQuery(Modulo)(
      where,
      [
        {
          model: Planes,
          as: "plan",
          attributes: [["clave", "planDeEstudio"], "idPrograma"],
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

export { findOneModulo };
