import { z } from "zod";

export const registerSchema = z.object({
    username: z
        .string({ required_error: "Usuario requerido para continuar.", }),
    email: z
        .string({ required_error: "Email requerido para continuar.", })
        .email({ message: "Ingrese un email válido.", }),
    password: z
        .string({ required_error: "Contraseña requerida para continuar.", })
        .min(6, { message: "Contraseña: mínimo 8 caracteres.", }),
});

export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email requerido para continuar.", })
        .email({ message: "Ingrese un email válido.", }),
    password: z
        .string({ required_error: "Contraseña requerida para continuar.", })
        .min(6, { message: "Contraseña: mínimo 8 caracteres.", }),
});