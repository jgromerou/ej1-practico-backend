import Tarea from '../models/tarea';

export const controladorTest = (req, res) => {
  res.send('Este es un test de mi ruta GET de raíz');
};

export const crearTarea = async (req, res) => {
  try {
    const { nombreTarea } = req.body;

    //verificar si el email ya existe
    let tarea = await Tarea.findOne({
      nombreTarea: { $regex: nombreTarea, $options: 'i' },
    }); //devulve un null
    console.log(tarea);
    if (tarea) {
      //si el usuario existe
      return res.status(400).json({
        mensaje: 'ya existe una tarea con el correo enviado',
      });
    }
    //guardamos el nuevo usuario en la BD
    tarea = new Tarea(req.body);
    await tarea.save();
    res.status(201).json({
      mensaje: 'tarea creada',
      nombreTarea: tarea.nombreTarea,
      uid: tarea._id,
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
    const tareas = await Tarea.find().select('-__v');
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

export const borrarTarea = async (req, res) => {
  try {
    //buscar en la BD un documento producto mediante el id y borrarlo
    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: 'La tarea fue eliminada correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error, no se pudo borrar la tarea.',
    });
  }
};

export const editarTarea = async (req, res) => {
  try {
    //buscar en la BD un documento tarea mediante el id y editarlo
    await Tarea.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: 'La tarea fue editada correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error, no se pudo editar la tarea.',
    });
  }
};

export const borrarTareas = async (req, res) => {
  try {
    //buscar en la BD todos los documentos productos y borrarlo
    await Tarea.deleteMany();
    res.status(200).json({
      mensaje: 'Las tareas fueron eliminada correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error, no se pudo borrar las tareas.',
    });
  }
};
