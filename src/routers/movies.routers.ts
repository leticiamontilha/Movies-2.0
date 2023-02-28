import { Router } from "express"
import { createMovieController, deleteMovieController, listAllMoviesController, updateMovieController } from "../controllers/movies.controllers"
import { validDataMovieMiddleware } from "../middlewares/ensureDatavalid.middlewares"
import movieIdExist from "../middlewares/movieIdExist.middlewares"
import movieNameExist from "../middlewares/movieNameExist.middlewares"
import { movieCreateSchema, updateMovieSchema } from "../schemas/movie.schemas"

const moviesRoutes: Router = Router()

moviesRoutes.post("", validDataMovieMiddleware(movieCreateSchema), movieNameExist, createMovieController)
moviesRoutes.get("", listAllMoviesController)
moviesRoutes.patch("/:id", movieIdExist, validDataMovieMiddleware(updateMovieSchema), updateMovieController)
moviesRoutes.delete("/:id", movieIdExist, deleteMovieController)


export default moviesRoutes