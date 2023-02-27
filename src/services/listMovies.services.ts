import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { IAllMoviesReturn } from "../interfaces/movies.interfaces"
import { allMoviesSchemas } from "../schemas/movies.schemas"

const listAllMoviesService = async (): Promise<IAllMoviesReturn> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const findMovies = await movieRepository.find()

    const allMovies = allMoviesSchemas.parse(findMovies)

    return allMovies
}

export default listAllMoviesService