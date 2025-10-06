import { crearEtiqueta, asociarEtiquetas, listarEtiquetasDeTarea } from "../services/etiquetaService.js"

export const crearEtiquetaController = async (req, res) => {
  try {
    const etiqueta = await crearEtiqueta(req.body)
    res.json(etiqueta)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const asociarEtiquetasController = async (req, res) => {
  try {
    const tarea = await asociarEtiquetas(req.params.id, req.body.etiquetasIds)
    res.json(tarea)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const listarEtiquetasController = async (req, res) => {
  try {
    const tarea = await listarEtiquetasDeTarea(req.params.id)
    res.json(tarea.etiquetas)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
