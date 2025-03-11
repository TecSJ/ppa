import { findAllProgramasHandler } from "./findAll.handlers.programas.adapter";
import { findOneProgramaHandler } from "./findOne.handlers.programas.adapter";
import { createProgramaHandler } from "./create.handlers.programas.adapter";
import { updateProgramaHandler } from "./update.handlers.programas.adapter";

export const carreraHandlers = {
    findAllProgramasHandler,
    findOneProgramaHandler,
    createProgramaHandler,
    updateProgramaHandler
}