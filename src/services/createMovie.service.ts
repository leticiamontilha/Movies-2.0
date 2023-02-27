import { IMovie, IMovieReturn } from "../interfaces/movies.interfaces"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities/movies.entity"
import { returnMovieSchema } from "../schemas/movie.schemas"
import { AppError } from "../errors"
import { iMovieRepo } from "../__tests__/interfaces"

const createMovieService = async (movieData: IMovie): Promise<IMovieReturn> => {
 
    const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie)
    
    const movie = movieRepository.create(movieData)

    await movieRepository.save(movie)

    const newMovie = returnMovieSchema.parse(movie)

    return newMovie
}

export default createMovieService