import { z } from "zod";

export const materialsSchema = z.object({
    codeMaterial: z
        .string({ required_error: "Se necesita el ID del material", })
        .min(3, { message: "ID del material: mínimo 3 caracteres.", })
        .max(3, { message: "ID del material: máximo 3 caracteres.", }),
    name: z
        .string({ required_error: "Se necesita el nombre del material", })
        .max(25, { message: "Nombre del material: máximo 25 caracteres.", }),
    pricePerGram: z
        .number({ required_error: "Se necesita el peso del objeto", })
        .positive({ message: "El precio por gramo debe ser mayor a 0", }),
});