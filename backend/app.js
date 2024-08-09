import express, { json } from 'express'
const app = express()
import cors from 'cors'
import morgan from 'morgan'
import { userRouter } from './src/routes/tasks.routes.js'
import { newConnection } from './src/db/tasks_db.js'

app.use(cors())
app.use(morgan())
app.use(json())

app.use(userRouter)

app.listen(3000, async () => {
  await newConnection()
  console.log("servidor conectado correctamente");
})