import {z} from "zod"

export const usernameValidation = z
    .string()
    .min(2,"Username must me atleast of 2 chars")
    .max(30,"Username must me atleast of 30 chars")
    .regex(/^[a-zA-Z0-9_]+$/,"Username Must contain Special Character")

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message: "Invalid email address" }),
    password : z.string().min(6,{message:"Password must be atleast 6 chars"})
})