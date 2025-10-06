import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const crearPerfil = async (usuarioId, { bio, edad }) => {
  return prisma.perfil.create({
    data: {
      bio,
      edad,
      usuario: { connect: { id: parseInt(usuarioId) } }
    }
  })
}

export const obtenerPerfil = async (usuarioId) => {
  return prisma.perfil.findUnique({
    where: { usuarioId: parseInt(usuarioId) }
  })
}
