import * as userService from "../services/userService.js"

export const registrarUsuario = async (req, res, next) => {
  try {
    const user = await userService.registrar(req.body)
    res.status(201).json(user)   
  } catch (err) {
    next(err)
  }
}

export const loguearUsuario = async (req, res, next) => {
  try {
    const result = await userService.login(req.body)
    res.json(result)
  } catch (err) {
    next(err)
  }
}

export const listarUsuarios = async (req, res, next) => {
  try {
    const users = await userService.listar()
    res.json(users)
  } catch (err) {
    next(err)
  }
}

export const usuarioPorId = async (req, res, next) => {
  try {
    const user = await userService.buscarUsuarioPorId(req.params.id)
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" })
    res.json(user)
  } catch (err) {
    next(err)
  }
}

export const vaciarUsuarios = async (req, res, next) => {
  try {
    await userService.vaciarListaUsuarios()
    res.json({ message: "Usuario eliminado" })
  } catch (err) {
    next(err)
  }
}
