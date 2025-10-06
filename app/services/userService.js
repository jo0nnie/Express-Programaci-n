import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { SECRET } from "../constants/constants.js"

const prisma = new PrismaClient()

export const registrar = async ({ nombre, email, password }) => {
  const usuarioExistente = await prisma.usuario.findUnique({ where: { email } })
  if (usuarioExistente) throw new Error("El usuario ya existe")

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await prisma.usuario.create({
    data: { nombre, email, password: hashedPassword }
  })

  return { id: newUser.id, nombre: newUser.nombre, email: newUser.email }
}

export const login = async ({ email, password }) => {
  const user = await prisma.usuario.findUnique({ where: { email } })
  if (!user) throw new Error("Usuario no encontrado")

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) throw new Error("Usuario y/o Contraseña incorrectos")

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, {
    expiresIn: "1h"
  })

  return { user: { id: user.id, email: user.email }, token }
}

export const listar = async () => {
  return prisma.usuario.findMany({
    select: { id: true, nombre: true, email: true }
  })
}

export const buscarUsuarioPorId = async (usuarioId) => {
  return prisma.usuario.findUnique({
    where: { id: parseInt(usuarioId) },
    select: { id: true, nombre: true, email: true }
  })
}

export const vaciarListaUsuarios = async () => {
  await prisma.usuario.deleteMany()
}
