import { Sequelize, Model } from "sequelize";
import { Actividad, ActividadesSchema } from "./Actividades";
import { Asignatura, AsignaturasSchema } from "./Asignaturas";
import { Competencia, CompetenciasSchema } from "./Competencias";
import { Conocimiento, ConocimientosSchema } from "./Conocimientos";
import { Programa, ProgramasSchema } from "./Programas";
import { Modulo, ModulosSchema } from "./Modulos";
import { Planes, PlanesSchema } from "./Planes";
import { Oferta, OfertasSchema } from "./Ofertas";
import { Reticulas, ReticulasSchema } from "./Reticulas";

export function setupModels(sequelize: Sequelize): void {
    Actividad.init(ActividadesSchema, Actividad.config(sequelize));
    Asignatura.init(AsignaturasSchema, Asignatura.config(sequelize));
    Competencia.init(CompetenciasSchema, Competencia.config(sequelize));
    Conocimiento.init(ConocimientosSchema, Conocimiento.config(sequelize));
    Programa.init(ProgramasSchema, Programa.config(sequelize));
    Planes.init(PlanesSchema, Planes.config(sequelize));
    Modulo.init(ModulosSchema, Modulo.config(sequelize));
    Oferta.init(OfertasSchema, Oferta.config(sequelize));
    Reticulas.init(ReticulasSchema, Reticulas.config(sequelize));

    Object.values(sequelize.models).forEach((model: typeof Model) => {
        if ('associate' in model) {
            (model as typeof Model & { associate: (models: typeof sequelize.models) => void }).associate(sequelize.models);
        }
    });
}
