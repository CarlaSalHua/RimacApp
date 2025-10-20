import { z } from "zod";

export const loginSchema = z.object({
  dni: z
    .string()
    .min(1, "DNI es obligatorio")
    .regex(/^\d{8}$/, "Debe tener 8 dígitos"),
  phone: z
    .string()
    .min(1, "Celular es obligatorio")
    .regex(/^\d{9}$/, "Debe tener 9 dígitos"),
  policy1: z
    .boolean()
    .refine((val) => val === true, {
      message: "Debes aceptar la Política de Privacidad",
    }),
  policy2: z
    .boolean()
    .refine((val) => val === true, {
      message: "Debes aceptar Comunicaciones Comerciales",
    }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
