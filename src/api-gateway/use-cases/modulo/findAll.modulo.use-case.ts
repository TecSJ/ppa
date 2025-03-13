import { findAllQuery } from 'models/queries';
import { Modulo } from 'models/types/Modulos';
import { Planes } from 'models/types/Planes';
import { Programa } from 'models/types/Programas';

type FindAllModulosData = Partial<Modulo>;

const findAllModulos = async (where?: FindAllModulosData) => {
  const modulos = await findAllQuery(Modulo)(
    where,
    [
      {
        model: Planes,
        as: "plan",
        attributes: ["clave", "idPrograma"],
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
  const formattedModulos = modulos.map((modulo) => {
    const moduloJSON = modulo.toJSON();
    const plan = moduloJSON.plan || {};
    const programa = plan.programa || {};

    return {
      idModulo: moduloJSON.idModulo,
      idPlan: moduloJSON.idPlan,
      clave: moduloJSON.clave,
      abreviatura: moduloJSON.abreviatura,
      nombre: moduloJSON.nombre,
      creditos: moduloJSON.creditos,
      asignaturas: moduloJSON.asignaturas,
      tipo: moduloJSON.tipo,
      estado: moduloJSON.estado,
      planDeEstudio: plan.clave,
      carrera: programa.abreviatura,
      unidadAcademica: programa.idPlantel,
    };
  });
  return formattedModulos;
};

export { findAllModulos };
