import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { iMovieRepo } from "../__tests__/interfaces"

const deleteUserService = async (idMovie: number): Promise<void> => {
        const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie)

        const movie = await movieRepository.findOne({
            where: {
                id: idMovie
            }
        })

        await movieRepository.remove(movie!)
    }

export default deleteUserService