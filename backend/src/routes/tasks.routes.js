import { Router } from "express";

export const tasksRouter = Router()

import {
  getTasks,
  getTasksById,
  insertTask,
  updateTask,
  deleteTask
} from "../controllers/tasks.controllers.js"

import { validacionesDeTask } from "../../middleware/validation.js";
import { applyValidations } from "../../middleware/applyValidation.js";


tasksRouter.get("/", getTasks)
tasksRouter.post("/", 
  validacionesDeTask, applyValidations, insertTask
)
tasksRouter.get("/:id", getTasksById)
tasksRouter.put("/:id", updateTask)
tasksRouter.delete("/:id", deleteTask)
