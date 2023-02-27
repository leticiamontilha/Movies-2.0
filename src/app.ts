import 'express-async-errors'
import express, { Application } from 'express'
import moviesRoutes from './routers/movies.routers'
import { handleErrors } from './errors'


const app: Application = express()
app.use(express.json())

app.use("/movies", moviesRoutes)

app.use(handleErrors)

export default app