import { Router } from 'express';
import {
  borrarTarea,
  borrarTareas,
  controladorTest,
  crearTarea,
  editarTarea,
  obtenerTarea,
  obtenerTareas,
} from '../controllers/tareas.controllers';

const router = new Router();

router.route('/').get(controladorTest);
router
  .route('/tareas')
  .post(crearTarea)
  .get(obtenerTareas)
  .delete(borrarTareas);
router
  .route('/tareas/:id')
  .get(obtenerTarea)
  .delete(borrarTarea)
  .put(editarTarea);

export default router;
