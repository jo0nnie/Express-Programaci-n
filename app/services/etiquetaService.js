import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const crearEtiqueta = async ({ nombre }) => {
  return prisma.etiqueta.create({ data: { nombre } })
}

export const asociarEtiquetas = async (tareaId, etiquetasIds) => {
  return prisma.tarea.update({
    where: { id: parseInt(tareaId) },
    data: {
      etiquetas: {
        connect: etiquetasIds.map(id => ({ id }))
      }
    },
    include: { etiquetas: true }
  })
}

export const listarEtiquetasDeTarea = async (tareaId) => {
  return prisma.tarea.findUnique({
    where: { id: parseInt(tareaId) },
    include: { etiquetas: true }
  })
}
