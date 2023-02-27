import { z } from "zod"

const movieCreateSchema = z.object({
    name: z.string().max(50).min(3),
    description: z.string().nullable().optional(),
    duration: z.number(),
    price: z.number()
})

const returnMovieSchema = movieCreateSchema.extend({
    id: z.number()
})

const allMoviesSchemas = z.array(returnMovieSchema)

const updateMovieSchema = movieCreateSchema.partial()

export {
    movieCreateSchema,
    returnMovieSchema,
    allMoviesSchemas,
    updateMovieSchema
}