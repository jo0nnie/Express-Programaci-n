import express from "express"
import { crearPerfilController, obtenerPerfilController } from "../controllers/perfilController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const perfilRoutes = express.Router()

perfilRoutes.use(authMiddleware)

perfilRoutes.post("/:id", crearPerfilController)

perfilRoutes.get("/:id", obtenerPerfilController)

export default perfilRoutes
