import { z } from "zod";

export const createLoanSchema = z.object({
    idMaterial: z
        .string({ required_error: "Se necesita el ID del material", }),
    weight: z
        .number({ required_error: "Se necesita el peso del objeto", })
        .positive({ message: "El peso debe ser mayor a 0", }),
    date: z
        .string().datetime().optional(),
});
