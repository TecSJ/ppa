import { updateQuery } from "models/queries";
import { Programa } from "models/types/Programas";
import { Optional } from "sequelize";

interface ProgramaAttibutes{
    idPrograma: number;
    clave?: string;
    codigo?: string;
    abreviatura?: string;
    nombre?: string;
    certificacion?: string;
    modalidad?: "Escolarizado" | "Mixta" | "A distancia";
    nivel?: "Licenciatura" | "Ingeniería" | "Maestría";
    documento?: string;
    idPlantel?: string;
    estado?: "Elaborado" | "Validado" | "Autorizado" | "Publicado" | "Cancelado";
}

type UpdateProgramData = Optional<ProgramaAttibutes, 'idPrograma'>;

const updatePrograma = async (idPrograma: number, data: UpdateProgramData) => {
    try{
        const [affectedRows] = await updateQuery(Programa)(data, {idPrograma});

        if(affectedRows === 0){
            return null;
        }

        return await Programa.findOne({where: { idPrograma }});
    }catch(error){
        console.error('Error en updateProgram:', error);
        throw new Error('Error al actualizar el programa');
    }
}

export {updatePrograma}