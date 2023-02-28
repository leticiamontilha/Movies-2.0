import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";
import { IMovieReturn, iMovieUpdate } from "../interfaces/movies.interfaces";
import { returnMovieSchema } from "../schemas/movie.schemas";
import { iMovieRepo } from "../__tests__/interfaces";

const updateMovieService = async (movieData: iMovieUpdate, idMovie: number): Promise<IMovieReturn> => {
    const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie)

    if (movieData.name) {
       const findMovieExist =  await movieRepository.findOneBy({
            name: movieData.name 
       })

       if(findMovieExist){
            throw new AppError("Movie already exists.", 409)
       }
           
    }

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