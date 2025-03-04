type ModuloAttributes = {
    idModulo: number;
    idPlan: number;
    clave: string;
    abreviatura: string;
    nombre: string;
    creditos: number;
    asignatuas: number;
    tipo: string;
    estado: string;
  };
    
    type FindOneModuloData = Partial<ModuloAttributes>;
    
    import { findOneQuery } from 'models/queries';
    import { Modulo } from 'models/types/Modulos';
    
    const findOneModulo = async (where: FindOneModuloData) => {
      return await findOneQuery(Modulo)(where);
    };
    
    export { findOneModulo };
    