import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { iMovieRepo } from "../__tests__/interfaces"

const listAllMoviesService = async (page: any, perPage:any, order:any, sort:any) => {

    const movieRepository: iMovieRepo = AppDataSource.getRepository(Movie)

    const newPage = Number(page) && Number(page) > 0 ? Number(page) : 1
    const newPerPage = Number(perPage) && Number(perPage) <= 5 && Number(perPage) > 0 ? Number(perPage) : 5

    const orderOptions = ['ASC', 'DESC']
    const sortOptions = ['price', 'duration']

    let newOrder: string 
    let newSort: string

    if(orderOptions.includes(order)){
        newOrder = order
    } else {
        newOrder = 'ASC'
    }

    if(sortOptions.includes(sort)){
        newSort = sort 
    } else {
        newSort = 'id'
    }
    
    const findMovies= await movieRepository.find({
        skip: newPage * (newPage - 1),
        take: newPerPage,
        order:{ 
            [newSort]: newOrder 
        }
    })

    const listMovies = await movieRepository.count()

    const allMovies = {
        prevPage: newPage > 1 ? `http://localhost:3000/movies?page=${newPage - 1}&perPage=${newPerPage}` : null,
        nextPage:
            listMovies > newPerPage * newPage
            ? `http://localhost:3000/movies?page=${newPage + 1}&perPage=${newPerPage}` : null,
        count: listMovies,
        data: findMovies,
    }

    return allMovies
}

export default listAllMoviesService