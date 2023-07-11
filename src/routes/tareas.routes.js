import { Router } from 'express';
import {
  borrarTarea,
  borrarTareas,
  crearTarea,
  editarTarea,
  obtenerTarea,
  obtenerTareas,
} from '../controllers/tareas.controllers';
import validarTarea from '../helpers/validarTarea';

const router = new Router();

router
  .route('/tareas')
  .post(validarTarea, crearTarea)
  .get(obtenerTareas)
  .delete(borrarTareas);
router
  .route('/tareas/:id')
  .get(obtenerTarea)
  .delete(borrarTarea)
  .put(validarTarea, editarTarea);

export default router;
