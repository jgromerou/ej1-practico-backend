import { check } from 'express-validator';
import resultadoValidacion from './resultadoValidacion';

const validarTarea = [
  check('nombreTarea')
    .notEmpty()
    .withMessage('La Nombre de la Tarea es obligatoria.')
    .isLength({
      min: 2,
      max: 100,
    })
    .withMessage('La Nombre de la tarea debe contener entre 2 y 100 caracteres')
    .matches(/^[A-Za-z\s]+$/)
    .withMessage('La nombre de la tarea debe ser letras y espacios.'),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarTarea;
