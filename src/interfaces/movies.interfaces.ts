import { movieSchema, allMoviesSchemas, returnMovieSchema } from "../schemas/movies.schemas"
import { z } from "zod"
import { DeepPartial } from "typeorm"


type IMovie = z.infer<typeof movieSchema>
type IMovieReturn = z.infer<typeof returnMovieSchema>
type IAllMoviesReturn = z.infer<typeof allMoviesSchemas>
type iMovieUpdate = DeepPartial<IMovie>;

export {
    IMovie,
    IMovieReturn,
    IAllMoviesReturn,
    iMovieUpdate
}