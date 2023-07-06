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
import { check } from 'express-validator';

const router = new Router();

router.route('/').get(controladorTest);
router
  .route('/tareas')
  .post(
    [
      check('nombreTarea')
        .notEmpty()
        .withMessage('La Nombre de la Tarea es obligatoria.')
        .isLength({
          min: 2,
          max: 100,
        })
        .withMessage(
          'La Nombre de la tarea debe contener entre 2 y 100 caracteres'
        )
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('La nombre de la tarea debe ser letras y espacios.'),
    ],
    crearTarea
  )
  .get(obtenerTareas)
  .delete(borrarTareas);
router
  .route('/tareas/:id')
  .get(obtenerTarea)
  .delete(borrarTarea)
  .put(editarTarea);

export default router;
