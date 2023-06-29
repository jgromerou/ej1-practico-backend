import { Router } from 'express';
import { controladorPrueba } from '../controllers/tareas.controllers';

const router = new Router();

router.route('/prueba').get(controladorPrueba);

export default router;
