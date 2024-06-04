import {z} from "zod"

export const signInSchema = z.object({
    identifier : z.string(),
    password : z.string().min(6,{message:"Password must be atleast 6 chars"})
})