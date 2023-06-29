import { Router } from 'express';
import {
  controladorPrueba,
  crearTarea,
} from '../controllers/tareas.controllers';

const router = new Router();

router.route('/prueba').get(controladorPrueba);
router.route('/tareas').post(crearTarea);

export default router;
