import { Router } from "express"
import { createMovieController, deleteMovieController, listAllMoviesController, updateMovieController } from "../controllers/movies.controllers"
import { validDataMovieMiddleware } from "../middlewares/ensureDatavalid.middlewares"
import movieIdExist from "../middlewares/movieIdExist.middlewares"
import movieNameExist from "../middlewares/movieNameExist.middlewares"
import { movieSchema, updateMovieSchema } from "../schemas/movies.schemas"

const moviesRoutes: Router = Router()

moviesRoutes.post("", movieNameExist, validDataMovieMiddleware(movieSchema), createMovieController)
moviesRoutes.get("", listAllMoviesController)
moviesRoutes.patch("/:id", movieIdExist, validDataMovieMiddleware(updateMovieSchema), updateMovieController)
moviesRoutes.delete("/:id", movieIdExist, deleteMovieController)


export default moviesRoutes