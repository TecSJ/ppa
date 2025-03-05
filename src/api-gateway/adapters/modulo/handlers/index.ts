import { createModuloHandler } from './create.handlers.modulo.adapter';

import { findAllModuloHandler } from './findAll.handlers.modulo.adapter';
import { findOneModuloHandler } from './findOne.handlers.modulo.adapter';
import { updateModuloHandler } from './update.handlers.modulo.adapter';

export const moduloHandler = {
    createModuloHandler,
    findAllModuloHandler,findOneModuloHandler,
    updateModuloHandler
};