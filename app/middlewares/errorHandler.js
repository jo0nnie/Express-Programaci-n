export const errorHandler = (err, req, res, next) => {
  try {
    console.error("Error:", err)

    const status = err.status || 500
    const message = err.message || "Error interno del servidor"

    res.status(status).json({
      success: false,
      status,
      message
    })
  } catch (handlerError) {
    console.error("Error:", handlerError)
    res.status(500).json({ success: false, message: "Error crítico en el servidor" })
  }
}
