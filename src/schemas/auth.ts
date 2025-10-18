import { z } from "zod";

export const AreaAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
});
export const AreasAPIResponseSchema = z.object({
  data: z.array(AreaAPIResponseSchema),
});
export const SignUpSchema = z
  .object({
    name: z.string().min(1, { message: "Tu nombre es obligario" }),
    last_name: z.string().min(1, { message: "Tus apellidos son obligatorios" }),
    email: z.email({ message: "Email no válido" }).min(1, { message: "El email es obligatorio" }),
    password: z.string().min(8, { message: "La contraseña es obligatoria" }),
    password_confirmation: z.string(),
    area_id: z.string().min(1, { message: "El área es obligatoria" }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Las contraseñas no son iguales",
    path: ["password_confirmation"],
  });
export const VerifyEmailSchema = z.object({
  token: z.string({ message: "Token no válido" }).length(6, { message: "Token no válido" }),
});

export const ErrorsSchema = z.object({
  errors: z.record(z.string(), z.array(z.string())),
});

const LinkItemSchema = z.object({
  title: z.string(),
  url: z.string(),
  icon: z.any(),
});
const LinksSchema = z.object({
  user: z.object({
    name: z.string(),
    email: z.string(),
    avatar: z.string(),
  }),
  navMain: z.array(LinkItemSchema),
  navSecondary: z.array(LinkItemSchema),
  documents: z.array(LinkItemSchema),
});

export type Area = z.infer<typeof AreaAPIResponseSchema>;
export type Links = z.infer<typeof LinksSchema>;
export type LinkItem = z.infer<typeof LinkItemSchema>;
export type SignUp = z.infer<typeof SignUpSchema>;
export type VerifyEmail = z.infer<typeof VerifyEmailSchema>;
