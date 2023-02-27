import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";
import { IMovieReturn, iMovieUpdate } from "../interfaces/movies.interfaces";
import { returnMovieSchema } from "../schemas/movies.schemas";

const updateMovieService = async (movieData: iMovieUpdate, idMovie: number): Promise<IMovieReturn> => {
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const oldMovieData = await movieRepository.findOneBy({
        id: idMovie
    })

    const newMovieData = movieRepository.create({
        ...oldMovieData,
        ...movieData
    })

    await movieRepository.save(newMovieData)

    return returnMovieSchema.parse(newMovieData)

}

export default updateMovieService