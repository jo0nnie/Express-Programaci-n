import { crearTarea, listarTareas } from "../services/tareaService.js"

export const crearTareaController = async (req, res) => {
  try {
    const tarea = await crearTarea(req.params.id, req.body)
    res.json(tarea)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const listarTareasController = async (req, res) => {
  try {
    const tareas = await listarTareas(req.params.id)
    res.json(tareas)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
