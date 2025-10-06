import express from "express"
import { crearEtiquetaController, asociarEtiquetasController, listarEtiquetasController } from "../controllers/etiquetaController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const etiquetaRoutes = express.Router()

etiquetaRoutes.use(authMiddleware)

etiquetaRoutes.post("/", crearEtiquetaController)

etiquetaRoutes.post("/:id", asociarEtiquetasController)

etiquetaRoutes.get("/:id", listarEtiquetasController)

export default etiquetaRoutes
