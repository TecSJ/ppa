import { findOnePlanHandler } from './find-one.handlers.plan.adapters';
import { findAllPlanesHandler } from './find-all.handlers.planes.adapters';
import { updatePlanHandler } from './update.handlers.plan.adapters';
import { createPlanHandler } from './create.handlers.plan.adapters';

export const planHandlers = {
    findOnePlanHandler,
    findAllPlanesHandler,
    updatePlanHandler,
    createPlanHandler,
};
