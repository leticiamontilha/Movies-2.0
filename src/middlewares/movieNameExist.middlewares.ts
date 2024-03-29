import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";


const movieNameExist = async (request: Request, response: Response, next: NextFunction): Promise<void> =>{
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const findMovieExist = await movieRepository.findOne({
        where: {
            name: request.body.name
        }
    })
    
    if(findMovieExist){
        throw new AppError("Movie already exists.", 409)
    }

    return next()
}

export default movieNameExist