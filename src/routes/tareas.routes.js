import { Router } from 'express';
import {
  controladorPrueba,
  crearTarea,
  obtenerTareas,
} from '../controllers/tareas.controllers';

const router = new Router();

router.route('/prueba').get(controladorPrueba);
router.route('/tareas').post(crearTarea);
router.route('/tareas').get(obtenerTareas);

export default router;
