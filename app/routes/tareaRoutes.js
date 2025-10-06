import express from "express"
import { crearTareaController, listarTareasController } from "../controllers/tareaController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const tareaRoutes = express.Router()

tareaRoutes.use(authMiddleware)

tareaRoutes.post("/:id", crearTareaController)

tareaRoutes.get("/:id", listarTareasController)

export default tareaRoutes
