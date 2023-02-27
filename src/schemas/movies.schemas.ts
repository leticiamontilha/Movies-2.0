import { z } from "zod"

const movieSchema = z.object({
    name: z.string().max(50).min(3),
    description: z.string().nullable().optional(),
    duration: z.number(),
    price: z.number()
})

const returnMovieSchema = movieSchema.extend({
    id: z.number()
})

const allMoviesSchemas = z.array(returnMovieSchema)

const updateMovieSchema = movieSchema.partial()

export {
    movieSchema,
    returnMovieSchema,
    allMoviesSchemas,
    updateMovieSchema
}