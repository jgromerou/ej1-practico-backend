import Tarea from '../models/tarea';

export const controladorTest = (req, res) => {
  res.send('Este es un test de mi ruta GET de raíz');
};

export const crearTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({
      message: 'La tarea fue creada correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al intentar crear una tarea',
    });
  }
};

export const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find({}).select('-__v');
    res.json(tareas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al intentar crear una tarea',
    });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    res.status(200).json(tarea);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar obtener la tarea',
    });
  }
};
