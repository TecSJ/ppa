import { findOneQuery } from 'models/queries';
import { Modulo } from 'models/types/Modulos';
import { Planes } from 'models/types/Planes';
import { Programa } from 'models/types/Programas';

type ModuloAttributes = {
  idModulo: number;
  idPlan: number;
  clave: string;
  abreviatura: string;
  nombre: string;
  creditos: number;
  asignaturas: number;
  tipo: string;
  estado: string;
};

type FindOneModuloData = Partial<ModuloAttributes>;

const findOneModulo = async (where: FindOneModuloData) => {
  const modulo = await findOneQuery(Modulo)(where, [
    {
      model: Planes,
      as: 'plan',
      attributes: ['clave', 'idPrograma'],
      include: [
        {
          model: Programa,
          as: 'programa',
          attributes: ['abreviatura', 'idPlantel'],
        },
      ],
    },
  ]);
  if (!modulo) {
    return null;
  }
  // Formatear el resultado
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
};

export { findOneModulo };
