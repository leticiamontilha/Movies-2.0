import { movieCreateSchema, allMoviesSchemas, returnMovieSchema } from "../schemas/movie.schemas"
import { z } from "zod"
import { DeepPartial, MongoClient, Repository } from "typeorm"
import { Movie } from "../entities"


type IMovie = z.infer<typeof movieCreateSchema>
type IMovieReturn = z.infer<typeof returnMovieSchema>
type IAllMoviesReturn = z.infer<typeof allMoviesSchemas>
type iMovieUpdate = DeepPartial<IMovie>
type iMovieRepo = Repository<Movie>;

export {
    IMovie,
    IMovieReturn,
    IAllMoviesReturn,
    iMovieUpdate,
    iMovieRepo
}