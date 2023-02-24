import { z } from "zod"

const createMovieSchema = z.object({
    name: z.string().max(50),
    description: z.string().optional(),
    duration: z.number(),
    price: z.number()
})

const returnMovieSchema = createMovieSchema.extend({
    id: z.number()
})


const allMoviesSchemas = z.array(returnMovieSchema)


export {
    createMovieSchema,
    returnMovieSchema,
    allMoviesSchemas
}