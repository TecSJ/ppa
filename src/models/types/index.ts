import { Sequelize } from 'sequelize';
import { Actividad, ActividadesSchema } from './Actividades';
import { Asignatura, AsignaturasSchema } from './Asignaturas';
import { Competencia, CompetenciasSchema } from './Competencias';
import { Conocimiento, ConocimientosSchema } from './Conocimientos';
import { Modulo, ModulosSchema } from './Modulos'
import { Planes, Planeschema } from './Planes';


export function setupModels(sequelize: Sequelize): void {
    // Aquí se definen los modelos
    Actividad.init(ActividadesSchema, Actividad.config(sequelize));
    Asignatura.init(AsignaturasSchema, Asignatura.config(sequelize));
    Competencia.init(CompetenciasSchema, Competencia.config(sequelize));
    Conocimiento.init(ConocimientosSchema, Conocimiento.config(sequelize));
    Planes.init(Planeschema, Planes.config(sequelize));
    Modulo.init(ModulosSchema, Modulo.config(sequelize));

    // Aquí se definen las relaciones
    Asignatura.associate(sequelize.models);
    Conocimiento.associate(sequelize.models);
    Modulo.associate(sequelize.models);
}
