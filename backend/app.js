import express from 'express'
const app = express()
import cors from 'cors'
import morgan from 'morgan'
import { tasksRouter } from './src/routes/tasks.routes.js'
import { newConnection } from './src/db/tasks_db.js'

app.use(cors())
app.use(morgan())
app.use(express.json())

app.use("/tasks", tasksRouter)

app.listen(3000, async () => {
  await newConnection()
  console.log("servidor conectado correctamente");
})