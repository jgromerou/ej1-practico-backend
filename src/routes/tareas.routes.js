import { Router } from 'express';
import {
  controladorTest,
  crearTarea,
  obtenerTarea,
  obtenerTareas,
} from '../controllers/tareas.controllers';

const router = new Router();

router.route('/').get(controladorTest);
router.route('/tareas').post(crearTarea).get(obtenerTareas);
router.route('/tareas/:id').get(obtenerTarea);

export default router;
