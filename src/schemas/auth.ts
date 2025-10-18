import { boolean, z } from "zod";

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
export const SignInResponse = z.object({
  email: z.email({ message: "Email no válido" }).min(1, { message: "El email es obligatorio" }),
  password: z.string({ message: "La contraseña es obligatoria" }),
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
  navMain: z.array(LinkItemSchema),
  navSecondary: z.array(LinkItemSchema),
  documents: z.array(LinkItemSchema),
});

export const RolesResponse = z.array(z.string());
export const PermissionsResponse = z.array(z.string());

export const UserResponse = z.object({
  id: z.number(),
  name: z.string(),
  surnames: z.string(),
  email: z.string(),
  email_verified_at: z.string(),
  area: z.string(),
  user_status: z.string(),
  roles: RolesResponse,
  permissions: PermissionsResponse,
});

export const CheckSessionResponse = z.object({
  logged_in: z.boolean(),
  user: UserResponse,
});

export const DataAuthenticateResponse = z.object({
  access_token: z.string(),
  token_type: z.string(),
  user: UserResponse,
});

export const LoginResponse = z.object({
  message: z.string(),
  data: DataAuthenticateResponse,
});

export type Area = z.infer<typeof AreaAPIResponseSchema>;
export type Links = z.infer<typeof LinksSchema>;
export type LinkItem = z.infer<typeof LinkItemSchema>;
export type SignUp = z.infer<typeof SignUpSchema>;
export type SignIn = z.infer<typeof SignInResponse>;
export type VerifyEmail = z.infer<typeof VerifyEmailSchema>;
export type User = z.infer<typeof UserResponse>;
