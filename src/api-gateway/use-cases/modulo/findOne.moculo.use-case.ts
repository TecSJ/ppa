import { findOneQuery } from 'models/queries';
import { Modulo } from 'models/types/Modulos';
import { Planes } from 'models/types/Planes';
import { Programa } from 'models/types/Programas';

type ModuloAttributes = Partial<Modulo>;

type FindOneModuloData = Partial<ModuloAttributes>;

const findOneModulo = async (where: FindOneModuloData) => {
  return await findOneQuery(Modulo)(
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
              attributes: ["abreviatura", "idPlantel"],
            },
          ],
        },
      ]
    );
};

export { findOneModulo };
