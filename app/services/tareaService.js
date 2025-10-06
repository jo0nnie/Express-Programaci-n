import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const crearTarea = async (usuarioId, { titulo, descripcion }) => {
  return prisma.tarea.create({
    data: {
      titulo,
      descripcion,
      usuario: { connect: { id: parseInt(usuarioId) } }
    }
  })
}

export const listarTareas = async (usuarioId) => {
  return prisma.tarea.findMany({
    where: { usuarioId: parseInt(usuarioId) },
    include: { etiquetas: true }
  })
}
