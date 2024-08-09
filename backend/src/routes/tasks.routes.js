import { getTasks, getTasksById, insertTask, updateTask, deleteTask } from "../controllers/tasks.controllers.js";
import { Router } from "express";

export const userRouter = Router()

userRouter.get("/tasks", getTasks)

userRouter.get("/tasks/:id", getTasksById)

userRouter.post("/tasks", insertTask)

userRouter.post("/tasks/:id", updateTask)

userRouter.delete("/tasks/:id", deleteTask)

