import { Request, Response } from "express";
import { IMovie } from "../interfaces/movies.interfaces";
import createMovieService from "../services/createMovie.service";
import deleteUserService from "../services/deleteMovie.service";
import listAllMoviesService from "../services/listMovies.services";
import updateMovieService from "../services/updateMovie.service";

const createMovieController = async (request: Request, response: Response) => {
    const userData: IMovie = request.body

    const newMovie = await createMovieService(userData)

    return response.status(201).json({
        newMovie
    })
}

const listAllMoviesController = async (request: Request, response:Response) =>{
    // const page = Number(request.query.page!)
    // const perPage = Number(request.query.perPage!)
    // const sort = Number(request.query.sort!)
    // const oder = Number(request.query.order!)

    const movies = await listAllMoviesService()

    return response.json(movies)
}

const updateMovieController = async (request: Request, response:Response) => {
    const dataMovie = request.body
    const movieId = Number(request.params.id)

    const updateMovie = await updateMovieService(dataMovie, movieId)

    return response.json(updateMovie)
}

const deleteMovieController = async (request: Request, response:Response) => {
    const movieId = Number(request.params.id)

    await deleteUserService(movieId)

    return response.status(204).send()
    
}
export {
    createMovieController,
    listAllMoviesController,
    deleteMovieController,
    updateMovieController
}