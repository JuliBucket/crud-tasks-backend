const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const { userRouter } = require('./src/routes/tasks.routes')

app.use(cors())
app.use(morgan())
app.use(express.json())

app.use(userRouter)

app.listen(3000, console.log('servidor corriendo en el puesto http://localhost:3000'))