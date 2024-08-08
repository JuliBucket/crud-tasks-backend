const { obtenerTareas, obtenerTareaPorId, insertarTarea, actualizarTarea, eliminarTarea } = require("../controllers/tasks.controllers")
const userRouter = require("express").Router();

userRouter.get("/task", obtenerTareas)

userRouter.get("/tasks/:id", obtenerTareaPorId)

userRouter.post("/tasks", insertarTarea)

userRouter.post("/tasks/:id", actualizarTarea)

userRouter.delete("/tasks/:id", eliminarTarea)

module.exports = {
  userRouter
}