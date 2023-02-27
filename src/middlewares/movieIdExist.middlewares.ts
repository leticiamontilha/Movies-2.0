import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";


const movieIdExist = async (request: Request, response: Response, next: NextFunction): Promise<void> =>{
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const findMovieExist = await movieRepository.findOne({
        where: {
            id: Number(request.params.id)
        }
    })
    
    if(!findMovieExist){
        throw new AppError("Movie not find", 404)
    }

    return next()
}

export default movieIdExist