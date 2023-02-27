import { IMovie, IMovieReturn } from "../interfaces/movies.interfaces"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities/movies.entity"
import { Repository } from "typeorm"
import { returnMovieSchema } from "../schemas/movies.schemas"
import { AppError } from "../errors"

const createMovieService = async (movieData: IMovie): Promise<IMovieReturn> => {
 
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    
    const movie = movieRepository.create(movieData)

    await movieRepository.save(movie)

    const newMovie = returnMovieSchema.parse(movie)

    return newMovie
}

export default createMovieService