import { createAsignaturaHandler } from './create.handlers.asignatura.adapter';
import { deleteAsignaturaHandler } from './delete.handlers.asignatura.adapter';
import { findAllAsignaturaHandler } from './findAll.handlers.asignatura.adapter';
import { findOneAsignaturaHandler } from './findOne.handlers.asignatura.adapter';
import { updateAsignaturaHandler } from './update.handlers.asignatura.adapter';


export const asignaturaHandlers = {
  createAsignaturaHandler,
  deleteAsignaturaHandler,
  findAllAsignaturaHandler,
  findOneAsignaturaHandler,
  updateAsignaturaHandler,
};
