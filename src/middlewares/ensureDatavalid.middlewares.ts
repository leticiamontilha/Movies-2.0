import { Request, Response, NextFunction} from "express"
import { ZodTypeAny } from "zod"

const validDataMovieMiddleware = (schema: ZodTypeAny) => (request: Request, Response: Response, next: NextFunction) => {
    const validateData = schema.parse(request.body)

    request.body = validateData

    return next()
}

export {
    validDataMovieMiddleware
}