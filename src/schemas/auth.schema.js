import { z } from "zod";

export const registerSchema = z.object({
    username: z
        .string({ required_error: "Se necesita un usuario", }),
    email: z
        .string({ required_error: "Se necesita un email", })
        .email({ message: "El email no es valido", }),
    password: z
        .string({ required_error: "Se necesita una contraseña", })
        .min(6, { message: "Como minimo 8 caracteres", }),
});

export const loginSchema = z.object({
    email: z
        .string({ required_error: "Se necesita un email", })
        .email({ message: "El email no es valido", }),
    password: z
        .string({ required_error: "Se necesita una contraseña", })
        .min(6, { message: "Como minimo 8 caracteres", }),
});