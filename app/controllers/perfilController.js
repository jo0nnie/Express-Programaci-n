import { crearPerfil, obtenerPerfil } from "../services/perfilService.js"

export const crearPerfilController = async (req, res) => {
  try {
    const perfil = await crearPerfil(req.params.id, req.body)
    res.json(perfil)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const obtenerPerfilController = async (req, res) => {
  try {
    const perfil = await obtenerPerfil(req.params.id)
    if (!perfil) return res.status(404).json({ error: "Perfil no encontrado" })
    res.json(perfil)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
