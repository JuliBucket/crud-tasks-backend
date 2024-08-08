const { getTasks, getTasksById, insertTask, updateTask, deleteTask } = require("../controllers/tasks.controllers")
const userRouter = require("express").Router();

userRouter.get("/tasks", getTasks)

userRouter.get("/tasks/:id", getTasksById)

userRouter.post("/tasks", insertTask)

userRouter.post("/tasks/:id", updateTask)

userRouter.delete("/tasks/:id", deleteTask)

module.exports = {
  userRouter
}