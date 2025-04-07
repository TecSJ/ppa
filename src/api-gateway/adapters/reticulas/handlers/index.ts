import { createReticulaHandler } from './create.handlers.reticula.adapters';
import { findAllReticulasHandler } from './find-all.handler.reticulas.adapters';
import { findOneReticulaHandler } from './find-one.handlers.reticula.adapters';
import { updateReticulaHandler } from './update.handlers.reticula.adapters';

export const reticulaHandlers = {
    createReticulaHandler,
    findAllReticulasHandler,
    findOneReticulaHandler,
    updateReticulaHandler,
};
