import {z} from "zod"

export const messageSchema = z.object({
    content : z.string().min(10,{message:'Content must be at leat of 10 chars'}).max(300,{message:"content mus be no longer than 300 chars"})
})